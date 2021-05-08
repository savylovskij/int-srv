import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ISessionStorage } from '@int-srv/shared/utils/interfaces';
import { BaseMemoryStorage } from './base-memory.storage';
import { isPlatformBrowser } from '@angular/common';
import { storageAvailable } from '../utils/storage.utils';

@Injectable()
export class BaseSessionStorage implements ISessionStorage {
  private readonly storage: Storage;

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  constructor(
    private memoryStorage: BaseMemoryStorage,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (
      isPlatformBrowser(this.platformId) &&
      storageAvailable('sessionStorage')
    ) {
      this.storage = window.sessionStorage;
    } else {
      this.storage = this.memoryStorage;
    }
  }
}
