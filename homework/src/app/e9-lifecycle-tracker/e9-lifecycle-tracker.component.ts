import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-e9-lifecycle-tracker',
  templateUrl: './e9-lifecycle-tracker.component.html',
  styleUrls: ['./e9-lifecycle-tracker.component.css']
})
export class E9LifecycleTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text: string = "";
  inputText: string | null = "";

  addComponent() {
    this.inputText = this.text;
  }

  delete() {
    this.inputText = null;
  }
}
