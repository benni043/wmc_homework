import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-error-message',
  template: '<p>{{message}}</p>',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit, OnChanges {

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
  }

  @Input() message: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.loggerService.error(`${changes['message'].previousValue} --> ${this.message}`);
  }

}
