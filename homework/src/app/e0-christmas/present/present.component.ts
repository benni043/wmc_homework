import {Component, Input, OnInit} from '@angular/core';
import {ChildPresentServiceService} from "../child-present-service.service";

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  constructor(private childPresentService: ChildPresentServiceService) { }

  ngOnInit(): void {
    this.present = this.childPresentService.getPresent(this.presentId);
  }

  @Input() presentId: number = 0;

  present: {id: number, inhalt: string, farbe: string, groesse: string};

}
