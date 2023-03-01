import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  name: string = "";
  height: number = 0;
  mass: number = 0;
  hairColor: string = "";
  skinColor: string = "";
  eyeColor: string = "";
  birthYear: Date = new Date();

}
