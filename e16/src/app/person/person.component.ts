import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() name: string = "";
  @Input() height: number = 0;
  @Input() mass: number = 0;
  @Input() hairColor: string = "";
  @Input() skinColor: string = "";
  @Input() eyeColor: string = "";
  @Input() birthYear: string = "";

}
