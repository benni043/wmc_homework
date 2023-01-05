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

  inhalt: string;
  farbe: string;
  groesse: string = "Größe";

  erstelleGeschenk(inhalt: string, farbe: string, groesse: string) {
    this.presentServiceService.addNewPresent({inhalt, farbe, groesse});
  }


}
