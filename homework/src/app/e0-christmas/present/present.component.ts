import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() inhalt: string;
  @Input() farbe: string;
  @Input() groesse: string;

}
