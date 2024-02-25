import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNombre'
})
export class FormatNombrePipe implements PipeTransform {

  transform(value: number): string {
    if (value < 1000) {
      return value.toString();
    } else if (value < 1000000) {
      return (value / 1000).toFixed(0) + 'K';
    } else {
      return (value / 1000000).toFixed(0) + 'M';
    }
  }

}
