import {Component, Input, OnInit} from '@angular/core';
import {PresentService} from "../present.service";
import {ChildPresentServiceService} from "../child-present-service.service";

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  constructor(private presentService: PresentService, private childService: ChildPresentServiceService) { }

  ngOnInit(): void {
  }

  @Input() inhalt: string;
  @Input() farbe: string;
  @Input() groesse: string;

  @Input() id: number;

  @Input() whichList: number;

  delete() {
    if(this.whichList === -1) {
      this.presentService.deletePresent(this.id);
    } else {
      this.childService.deletePresent(this.id, this.whichList);
    }

  }

}
