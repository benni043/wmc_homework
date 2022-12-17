import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  count: number = 0;

  warn(msg: string) {
    console.log(`${this.count} WARN: ${msg}`);
    this.count++;
  }

  error(msg: string) {
    console.log(`${this.count} ERROR: ${msg}`);
    this.count++;
  }

}
