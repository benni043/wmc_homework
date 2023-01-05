import {Component, Input, OnInit} from '@angular/core';
import {ChildPresentServiceService} from "../child-present-service.service";
import {PresentService} from "../present.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public presentService: PresentService, private childPresentService: ChildPresentServiceService) { }

  ngOnInit(): void {
    this.child = this.childPresentService.getChild(this.childId);
  }

  @Input() childId: number;

  child: {id: number, vorname: string, nachname: string, geburtsdatum: Date, geschenke: {id: number, inhalt: string, farbe: string, groesse: string }[]};

  getAge(): number {
    let ageDifMs = Date.now() - new Date(this.child.geburtsdatum).getTime();
    let ageDate = new Date(ageDifMs);
    return  Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
