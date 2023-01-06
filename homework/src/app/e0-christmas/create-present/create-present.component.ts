import { Component, OnInit } from '@angular/core';
import {PresentService} from "../present.service";

@Component({
  selector: 'app-create-present',
  templateUrl: './create-present.component.html',
  styleUrls: ['./create-present.component.css']
})
export class CreatePresentComponent implements OnInit {

  constructor(private presentServiceService: PresentService) { }

  ngOnInit(): void {
  }

  inhalt: string = "";
  farbe: string = "";
  groesse: string = "S";

  erstelleGeschenk(inhalt: string, farbe: string, groesse: string) {
    if(inhalt != "") {
      this.presentServiceService.addNewPresent({inhalt, farbe, groesse});
    } else {
      alert("Geben Sie alle Attribute an!")
    }
  }


}
