import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-e7-component',
  templateUrl: './e7-component.component.html',
  styleUrls: ['./e7-component.component.css']
})
export class E7ComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    setInterval(() => {
      let randNum = Math.floor(Math.random() * this.errors.length);
      this.runningErrors.push({text: this.errors[randNum].text, type: this.errors[randNum].type});
    }, 5000);

  }

  errors: { text: string, type: string }[] = [
    {text: 'Some thing went wrong :(', type: 'Error'},
    {text: 'Jonas joinded the Game', type: 'Error'},
    {text: 'Huff', type: 'Error'},
    {text: 'Error Error Error Error Error Error Error Error Error Error Error Error', type: 'Error'},
    {text: 'Alarm Alarm!', type: 'Error'},
    {text: 'Alert Alert!', type: 'Warn'},
    {text: 'Achtung Achtung', type: 'Warn'},
    {text: 'Bitte helfen sie mir ich bin in gefahr', type: 'Warn'},
    {text: 'Huff', type: 'Warn'},
    {text: 'Tobi', type: 'Warn'},
  ]
  runningErrors: { text: string, type: string }[] = [];

}
