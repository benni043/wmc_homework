import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.copyServer.subscribe((server) => {
      this.name = server.name;
      this.type = server.type;
    })
  }

  @Output() nameTypeEvent = new EventEmitter<{ name: string, type: string }>();
  @Input() copyServer: Observable<{ name: string, type: string }>;

  name: string = "";
  type: string = "Training";

  add(name: string, type: string) {
    this.nameTypeEvent.emit({name: name, type: type});
  }

}
