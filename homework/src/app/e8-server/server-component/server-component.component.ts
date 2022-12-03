import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent  {

  @Input() name: string = "";
  @Input() type: string = "";
  @Input() id: number = 0;

  @Output() deleteEvent = new EventEmitter<number>();

  delete() {
    this.deleteEvent.emit(this.id);
  }

  @Output() copyEvent = new EventEmitter<{ name: string, type: string }>();

  copy() {
    this.copyEvent.emit({name: this.name, type: this.type});
  }

}
