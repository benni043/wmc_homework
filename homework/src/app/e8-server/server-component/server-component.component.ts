import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name: string = "";
  @Input() type: string = "";

}
