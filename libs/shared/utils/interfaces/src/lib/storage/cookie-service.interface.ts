import { ICookieServiceOption } from './cookie-service-option.interface';

export abstract class ICookieService {
  abstract check(name: string): boolean;

  abstract get(name: string): string;

  abstract getAll(): { [key: string]: string };

  /**
   *
   * @param name
   * @param value
   * @param options Cookies: ICookieServiceOption
   */
  abstract put(
    name: string,
    value: string,
    options: Partial<ICookieServiceOption>
  ): void;

  abstract remove(name: string, path?: string, domain?: string): void;

  abstract removeAll(path?: string, domain?: string): void;
}
