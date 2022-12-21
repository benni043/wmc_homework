import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class IsolationService {
  constructor() { }

  isolated: boolean = false;

  isolate() {
    this.isolated = !this.isolated;
  }

}
