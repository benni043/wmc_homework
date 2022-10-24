import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e5-hello-world-pipe',
  templateUrl: './e5-hello-world-pipe.component.html',
  styleUrls: ['./e5-hello-world-pipe.component.css']
})
export class E5HelloWorldPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  greetings: string[] = ["Hello", "Hallo", "Grüß Gott"]

  name: string = "";
  selected: string = this.greetings[0];

}
