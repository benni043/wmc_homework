import { Component, OnInit } from '@angular/core';
import {ChildPresentServiceService} from "./child-present-service.service";
import {PresentService} from "./present.service";

@Component({
  selector: 'app-e0-christmas',
  templateUrl: './e0-christmas.component.html',
  styleUrls: ['./e0-christmas.component.css']
})
export class E0ChristmasComponent implements OnInit {

  constructor(public childPresentService: ChildPresentServiceService, public presentService: PresentService) { }

  ngOnInit(): void {

  }

}
