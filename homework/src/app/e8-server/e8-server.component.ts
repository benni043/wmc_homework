import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e8-server',
  templateUrl: './e8-server.component.html',
  styleUrls: ['./e8-server.component.css']
})

export class E8ServerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  index: number = 0;

  servers: { name: string, type: string, id: number }[] = [];

  func(server: { name: string, type: string }) {
    this.servers.push({name: server.name, type: server.type, id: this.index});
    this.index++;
  }

  delete(index: number) {
    for (let i = this.servers.length - 1; i >= 0; i--) {
      if(index == this.servers[i].id) this.servers.splice(i, 1);
    }
  }

  copyName: string = "";
  copyType: string = "";

  copy(server: {name: string, type: string}) {
    this.copyName = server.name;
    this.copyType = server.type;
  }

}
