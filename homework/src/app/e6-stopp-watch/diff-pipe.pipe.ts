import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  lastName: 'diffPipe'
})
export class DiffPipePipe implements PipeTransform {

  transform(value1: number, value2: number): string {
    return `+${(value1-value2) / 1000}`;
  }

}
