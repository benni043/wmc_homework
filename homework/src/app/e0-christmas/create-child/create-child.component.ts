import { Component, OnInit } from '@angular/core';
import {ChildPresentServiceService} from "../child-present-service.service";

@Component({
  selector: 'app-create-child',
  templateUrl: './create-child.component.html',
  styleUrls: ['./create-child.component.css']
})
export class CreateChildComponent implements OnInit {

  constructor(private childPresentService: ChildPresentServiceService) { }

  ngOnInit(): void {
  }

  vorname: string = "";
  nachname: string = "";
  geburtsdatum: Date = new Date;

  erstelleKind(vorname: string, nachname: string, geburtsdatum: Date) {
    if(this.vorname != "" && this.nachname != "" && geburtsdatum != null) {
      this.childPresentService.addNewChild({vorname, nachname, geburtsdatum});
    } else {
      alert("Geben Sie alle Attribute an!")
    }
  }

}
