import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerManagementService {
  constructor() {
  }

  copy = new EventEmitter<{ name: string, type: string }>();

  index: number = 0;
  servers: { name: string, type: string, id: number }[] = [];

  addNewServer(server: { name: string, type: string }) {
    this.servers.push({name: server.name, type: server.type, id: this.index});
    this.index++;
  }

  delete(id: number) {
    for (let i = 0; i < this.servers.length; i++) {
      if (id == this.servers[i].id) this.servers.splice(i, 1);
    }
  }

  getServer(id: number): { name: string, type: string, id: number }  {
    for (let i = 0; i < this.servers.length; i++) {
      if (id == this.servers[i].id) return this.servers[i];
    }

    return {name: "", type: "", id: -1};
  }
}
