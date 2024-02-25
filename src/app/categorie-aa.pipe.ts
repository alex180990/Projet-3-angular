import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'categorieAA'
})
export class CategorieAAPipe implements PipeTransform {

  transform(videos: Video[]): Video[] {
    return videos.filter(video => video.categorie === 'AA');
  }

}
