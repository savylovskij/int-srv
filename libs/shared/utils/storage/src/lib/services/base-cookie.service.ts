import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ICookieService,
  ICookieServiceOption,
} from '@int-srv/shared/utils/interfaces';
import { Request, Response } from 'express';

@Injectable()
export class BaseCookieService implements ICookieService {
  private readonly isBrowser: boolean = isPlatformBrowser(this.platformId);

  getCookieString(): string {
    return this.isBrowser ? this.document.cookie : this.request.headers.cookie;
  }

  check(name: string): boolean {
    name = encodeURIComponent(name);
    const regExp: RegExp = this.getCookieRegExp(name);

    return regExp.test(this.getCookieString());
  }

  get(name: string): string {
    if (this.check(name)) {
      name = encodeURIComponent(name);
      const regExp: RegExp = this.getCookieRegExp(name);
      const result: RegExpExecArray = regExp.exec(this.getCookieString());

      return result[1] ? this.safeDecodeURIComponent(result[1]) : null;
    }

    return null;
  }

  getAll(): { [p: string]: string } {
    const cookies: { [key: string]: string } = {};

    if (this.getCookieString() && this.getCookieString() !== '') {
      this.getCookieString()
        .split(';')
        .forEach((currentCookie) => {
          const [cookieName, cookieValue] = currentCookie.split('=');
          cookies[
            this.safeDecodeURIComponent(cookieName.replace(/^ /, ''))
          ] = this.safeDecodeURIComponent(cookieValue);
        });
    }

    return cookies;
  }

  put(
    name: string,
    value: string,
    options: Partial<ICookieServiceOption> = { sameSite: 'none', secure: true }
  ): void {
    let cookieString: string =
      encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

    if (options.expires) {
      cookieString += 'expires=' + options.expires.toUTCString() + ';';
    }

    if (options.path) {
      cookieString += 'path=' + options.path + ';';
    }

    if (options.domain) {
      cookieString += 'domain=' + options.domain + ';';
    }

    if (options.secure === false && options.sameSite === 'none') {
      options.secure = true;
      console.warn(
        `[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.` +
          `More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`
      );
    }
    if (options.secure) {
      cookieString += 'secure;';
    }

    if (options.sameSite) {
      cookieString += 'sameSite=' + options.sameSite + ';';
    }

    if (this.isBrowser) {
      this.document.cookie = cookieString;
    } else {
      this.request.headers.cookie = cookieString;
    }
  }

  remove(name: string, path?: string, domain?: string): void {
    if (this.isBrowser) {
      this.put(name, '', {
        path,
        domain,
        expires: new Date('Thu, 01 Jan 1970 00:00:01 GMT'),
      });
    } else {
      this.response.clearCookie(name, { path, domain });
    }
  }

  removeAll(path?: string, domain?: string): void {
    const cookies: { [p: string]: string } = this.getAll();

    if (this.isBrowser) {
      for (const cookieName of Object.keys(cookies)) {
        this.remove(cookieName, path, domain);
      }
    } else {
      for (const cookieName of Object.keys(cookies)) {
        this.response.clearCookie(cookieName, { path, domain });
      }
    }
  }

  private getCookieRegExp(name: string): RegExp {
    const escapedName: string = name.replace(
      /([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,
      '\\$1'
    );

    return new RegExp(
      '(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)',
      'g'
    );
  }

  private safeDecodeURIComponent(encodedURIComponent: string): string {
    try {
      return decodeURIComponent(encodedURIComponent);
    } catch {
      return encodedURIComponent;
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(REQUEST) @Optional() private request: Request,
    @Inject(RESPONSE) @Optional() private response: Response
  ) {}
}
