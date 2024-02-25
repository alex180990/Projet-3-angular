import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'categorieBb'
})
export class CategorieBbPipe implements PipeTransform {

  transform(videos: Video[]): Video[] {
    return videos.filter(video => video.categorie === 'BB');
  }

}
