import { Component } from '@angular/core';
import {JediServiceService} from "./jedi-service.service";

@Component({
  selector: 'app-e00-starewars',
  templateUrl: './e00-starewars.component.html',
  styleUrls: ['./e00-starewars.component.css']
})
export class E00StarewarsComponent {

  constructor(public jediService: JediServiceService) {
  }

}
