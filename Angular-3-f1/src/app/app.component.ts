import { Component } from '@angular/core';
import {Driver} from "./driver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drivers = Driver.getData();

  currYear: number = new Date().getFullYear();

  getAlter(date: number) {
    let currDate = Date.now();
    return new Date(currDate-date).getFullYear() - 1970;
  }

}
