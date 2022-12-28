import {Component, Input, OnInit} from '@angular/core';
import {ChildPresentServiceService} from "../child-present-service.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private childPresentService: ChildPresentServiceService) { }

  ngOnInit(): void {
    this.child = this.childPresentService.getChild(this.childId);
  }

  @Input() childId: number = 0;

  child: {id: number, vorname: string, nachname: string, geburtsdatum: Date};

  getAge(): number {
    return 5;
  }

}
