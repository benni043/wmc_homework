import {Component, Input, OnInit} from '@angular/core';
import {ChildPresentServiceService} from "../child-present-service.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public childPresentService: ChildPresentServiceService) { }

  ngOnInit(): void {
    this.child = this.childPresentService.getChild(this.childId);
  }

  @Input() childId: number;

  child: {id: number, vorname: string, nachname: string, geburtsdatum: Date, geschenke: {id: number, inhalt: string, farbe: string, groesse: string }[]};

  getAge(): number {
    return -1;
  }
}
