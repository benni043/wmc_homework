import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e3-fibonacci',
  templateUrl: './e3-fibonacci.component.html',
  styleUrls: ['./e3-fibonacci.component.css']
})
export class E3FibonacciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showCalc: boolean = true;

  number: number = 1;
  items: number[] = [];

  calc() {
    this.showCalc = false;

    for (let i = 0; i < this.number; i++) {
      this.items.push(this.fibbonaaciFormel(i+1));
    }
  }

  reset() {
    this.showCalc = true;

    this.items = [];
  }

  fibbonacci(num1: number): number {
    if (num1 == 1 || num1 == 2) return 1;
    else return this.fibbonacci(num1 - 1) + this.fibbonacci(num1 - 2);
  }

  fibbonaaciFormel(n: number): number {
    return Math.floor(1 / Math.sqrt(5) * (Math.pow(((1 + Math.sqrt(5)) / 2), n) - Math.pow(((1 - Math.sqrt(5)) / 2), n)));
  }

}
