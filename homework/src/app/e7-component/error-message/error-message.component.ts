import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: '<p>An error, we are doomed!</p>',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
