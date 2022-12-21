import {Component} from '@angular/core';
import {Subject} from "rxjs";
import {ServerManagementService} from "./server-management.service";

@Component({
  selector: 'app-e8-server',
  templateUrl: './e8-server.component.html',
  styleUrls: ['./e8-server.component.css']
})

export class E8ServerComponent{

  constructor(public serverManagementService: ServerManagementService) {
  }

}
