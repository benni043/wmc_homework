import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() name: string = "";
  @Input() type: string = "";

  @Input() id: number = 0;

  @Output() deleteEvent = new EventEmitter<number>();

  remove(index: number) {
    this.deleteEvent.emit(index);
  }

  @Output() copyEvent = new EventEmitter<{ name: string, type: string }>();

  copy(name: string, type: string) {
    this.copyEvent.emit({name: name, type: type});
  }

}
