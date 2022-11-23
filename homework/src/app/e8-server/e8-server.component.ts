import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e8-server',
  templateUrl: './e8-server.component.html',
  styleUrls: ['./e8-server.component.css']
})
export class E8ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  servers: {name: string, type: string}[] = [];

  name: string = "";
  type: string = "";

  func() {
    this.servers.push({name: this.name, type: this.type});
  }

}
