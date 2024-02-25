import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuree'
})
export class FormatDureePipe implements PipeTransform {

  transform(duree: number): string {
    if (duree < 60) {
      return `0:${this.padWithZero(duree)}`;

    } else {
      const heures = Math.floor(duree / 3600);
      const minutes = Math.floor((duree % 3600) / 60);
      const secondes = duree % 60;
      
      if (heures === 0) {
        return `${this.padWithZero(minutes)}:${this.padWithZero(secondes)}`;
      } else {

        return `${this.padWithZero(heures)}:${this.padWithZero(minutes)}:${this.padWithZero(secondes)}`;
      }
    }
  }

  private padWithZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
