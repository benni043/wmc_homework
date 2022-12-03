import {Component, Input} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-e8-server',
  templateUrl: './e8-server.component.html',
  styleUrls: ['./e8-server.component.css']
})

export class E8ServerComponent{

  index: number = 0;
  servers: { name: string, type: string, id: number }[] = [];

  addNewServer(server: { name: string, type: string }) {
    this.servers.push({name: server.name, type: server.type, id: this.index});
    this.index++;
  }

  delete(index: number) {
    for (let i = 0; i < this.servers.length; i++) {
      if(index == this.servers[i].id) this.servers.splice(i, 1);
    }
  }

  copySubject = new Subject<{name: string, type: string}>();

  copy(server: {name: string, type: string}) {
    this.copySubject.next({name: server.name, type: server.type});
  }

}
