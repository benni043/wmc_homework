import { Component, OnInit } from '@angular/core';
import {ChildPresentServiceService} from "./child-present-service.service";

@Component({
  selector: 'app-e0-christmas',
  templateUrl: './e0-christmas.component.html',
  styleUrls: ['./e0-christmas.component.css']
})
export class E0ChristmasComponent implements OnInit {

  constructor(public childPresentService: ChildPresentServiceService) { }

  ngOnInit(): void {
  }

  vorname: string = "";
  nachname: string = "";
  geburtsdatum: Date;

  inhalt: string;
  farbe: string;
  groesse: string;

  erstelleGeschenk(inhalt: string, farbe: string, groesse: string) {
    this.childPresentService.addNewPresent({inhalt, farbe, groesse});
  }

  erstelleKind(vorname: string, nachname: string, geburtsdatum: Date) {
    this.childPresentService.addNewChild({vorname, nachname, geburtsdatum});
  }
}
