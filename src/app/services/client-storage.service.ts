import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientStorageService {
  private readonly localStorage;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.localStorage = this.document.defaultView?.localStorage;
  }

  getItem(key: string): string {
    return this.localStorage?.getItem(key) ?? '';
  }

  setItem(key: string, value: string): void {
    this.localStorage?.setItem(key, value);
  }
}
