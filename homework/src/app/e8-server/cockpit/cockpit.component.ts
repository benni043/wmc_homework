import {Component, OnInit} from '@angular/core';
import {ServerManagementService} from "../server-management.service";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor(private serverManagementService: ServerManagementService) {
    this.serverManagementService.copy.subscribe((server: {name: string, type: string}) => {
      this.name = server.name;
      this.type = server.type;
    })
  }

  ngOnInit(): void {
  }

  name: string = "server1";
  type: string = "training";

  add(name: string, type: string) {
    this.serverManagementService.addNewServer({name: name, type: type});
  }

}
