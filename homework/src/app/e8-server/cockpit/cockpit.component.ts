import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() nameTypeEvent = new EventEmitter<{ name: string, type: string }>();

  @Input() name: string = "";
  @Input() type: string = "";

  add(name: string, type: string) {
    this.nameTypeEvent.emit({name: name, type: type});
  }

}
