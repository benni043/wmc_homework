import { Component, OnInit } from '@angular/core';
import {Driver} from "./driver";

@Component({
  selector: 'app-e4-f1',
  templateUrl: './e4-f1.component.html',
  styleUrls: ['./e4-f1.component.css']
})
export class E4F1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  drivers = Driver.getData();

  // function von stackOverflow
  getAlter(date: number) {
    let currDate = Date.now();
    return new Date(currDate-date).getFullYear() - 1970;
  }

}
