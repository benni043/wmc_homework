import {Component, Input} from '@angular/core';
import {ServerManagementService} from "../server-management.service";
import {IsolationService} from "../isolation.service";

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
  providers: [IsolationService]
})
export class ServerComponentComponent  {

  constructor(public serverManagementService: ServerManagementService, public isolation: IsolationService) {
  }
  @Input() id: number = 0;

  delete() {
    this.serverManagementService.delete(this.id);
  }

  copy() {
    this.serverManagementService.copy.emit({name: this.serverManagementService.servers[this.id].name, type: this.serverManagementService.servers[this.id].type});
  }

}
