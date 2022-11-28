import { Component } from '@angular/core';

@Component({
  selector: 'app-e8-server',
  templateUrl: './e8-server.component.html',
  styleUrls: ['./e8-server.component.css']
})

export class E8ServerComponent {

  servers: {name: string, type: string}[] = [];

  name: string = "";
  type: string = "TRAINING";

  addServerToServerList() {
    if(this.name === "") return;
    this.servers.push({name: this.name, type: this.type});
  }

}
