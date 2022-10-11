import {Component, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  greetings: string[] = ["Hello", "Hallo", "Grüß Gott"]

  name: string = "";
  selected: string = this.greetings[0];
}
