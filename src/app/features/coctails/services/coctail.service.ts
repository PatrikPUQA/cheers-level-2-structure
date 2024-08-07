import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class CoctailService implements OnDestroy {
  constructor() {
    console.log('coctail service created');
  }

  ngOnDestroy(): void {
    console.log('coctail service destroyed');
  }
}
