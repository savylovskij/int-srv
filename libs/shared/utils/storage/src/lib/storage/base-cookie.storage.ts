import { Injectable } from '@angular/core';
import {
  ICookieServiceOption,
  ICookieStorage,
} from '@int-srv/shared/utils/interfaces';
import { BaseCookieService } from '../services/base-cookie.service';

@Injectable()
export class BaseCookieStorage implements ICookieStorage {
  get length(): number {
    return Object.keys(this.cookieService.getAll()).length;
  }

  clear(): void {
    this.cookieService.removeAll();
  }

  getItem(key: string): string | null {
    const item = this.cookieService.get(key);
    return item !== null ? item : null;
  }

  key(index: number): string | null {
    const key = Object.keys(this.cookieService.getAll());
    return index >= 0 && index <= key.length ? key[index] : null;
  }

  removeItem(key: string): void {
    this.cookieService.remove(key);
  }

  setItem(
    key: string,
    value: string,
    options: Partial<ICookieServiceOption> = { path: '/' }
  ): void {
    this.cookieService.put(key, value, options);
  }

  constructor(private cookieService: BaseCookieService) {}
}
