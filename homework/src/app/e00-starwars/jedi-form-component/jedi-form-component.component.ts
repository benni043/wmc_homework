import {Component, EventEmitter, Output} from '@angular/core';
import { jedi } from '../jedi';
import {JediServiceService} from "../jedi-service.service";

@Component({
  selector: 'app-jedi-form-component',
  templateUrl: './jedi-form-component.component.html',
  styleUrls: ['./jedi-form-component.component.css']
})
export class JediFormComponentComponent {

  constructor(public jediService: JediServiceService) {
  }
  name: string = "";
  rang: string = "";
  counter: number = 0;

  createJedi(): void {
    this.jedi.emit({name: this.name, rang: this.rang, counter: this.counter});
  }

  @Output() jedi: EventEmitter<jedi> = new EventEmitter<jedi>();

}
