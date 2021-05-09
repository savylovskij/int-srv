import { Injectable } from '@angular/core';
import { IAuthStorage } from '../interfaces/auth-storage.interface';
import { ILocalStorage } from '@int-srv/shared/utils/interfaces';

export const authStorageKey: { [key: string]: string } = {
  accessToken: 'auth',
};

@Injectable()
export class BaseAuthStorageService implements IAuthStorage {
  clear(): void {
    for (const prop of Object.values(authStorageKey)) {
      this.storage.removeItem(prop);
    }
  }

  getAccessToken(): string | null {
    return this.storage.getItem(authStorageKey.accessToken) || null;
  }

  removeAccessToken(): void {
    this.storage.removeItem(authStorageKey.accessToken);
  }

  setAccessToken(accessToken: string): void {
    this.storage.setItem(authStorageKey.accessToken, accessToken);
  }

  constructor(private storage: ILocalStorage) {}
}
