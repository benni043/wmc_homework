import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  lastName: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(name: string, greetingOption: string): string {
    return greetingOption + " " + name + "!";
  }

}
