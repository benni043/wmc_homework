import {Component, Pipe} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Pipe({name: 'exponent'}) export class ExponentPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    returnMath.pow(value, exponent);
  }

}
