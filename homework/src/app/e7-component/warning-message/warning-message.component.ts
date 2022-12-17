import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: '.app-warning-message',
  templateUrl: './warning-message.component.html',
  styles: ['p {\n' +
  '  width: 130px;\n' +
  '  border: 1px solid white;\n' +
  '  padding: 15px;\n' +
  '  margin: 10px;\n' +
  '  background-color: orange;\n' +
  '  border-radius: 10px;\n' +
  '}\n']
})
export class WarningMessageComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
  }

  @Input() message: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.loggerService.warn(`${changes['message'].previousValue} --> ${this.message}`);
  }

}
