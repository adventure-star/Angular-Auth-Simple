import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitcount'
})
export class DigitcountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value.toString().length;
  }

}
