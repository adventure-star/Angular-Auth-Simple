import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    return value.getDate();
  }

}
