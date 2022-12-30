import { Component, OnInit } from '@angular/core';
import {ChildPresentServiceService} from "../child-present-service.service";

@Component({
  selector: 'app-create-present',
  templateUrl: './create-present.component.html',
  styleUrls: ['./create-present.component.css']
})
export class CreatePresentComponent implements OnInit {

  constructor(private childPresentService: ChildPresentServiceService) { }

  ngOnInit(): void {
  }

  inhalt: string;
  farbe: string;
  groesse: string;

  erstelleGeschenk(inhalt: string, farbe: string, groesse: string) {
    this.childPresentService.addNewPresent({inhalt, farbe, groesse});
  }


}
