import {Component, Input, OnInit} from '@angular/core';
import {ServerManagementService} from "../server-management.service";
import {IsolationService} from "../isolation.service";

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
  providers: [IsolationService]
})
export class ServerComponentComponent implements OnInit {

  constructor(public serverManagementService: ServerManagementService, public isolation: IsolationService) {
  }
  @Input() id: number = 0;
  server: { name: string, type: string, id: number };

  ngOnInit() {
    this.server = this.serverManagementService.getServer(this.id);
  }

  delete() {
    this.serverManagementService.delete(this.id);
  }

  copy() {
    this.serverManagementService.copy.emit({lastName: this.server.lastName, type: this.server.type});
  }

}
