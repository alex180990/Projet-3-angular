import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'categorieCc'
})
export class CategorieCcPipe implements PipeTransform {

  transform(videos: Video[]): Video[] {
    return videos.filter(video => video.categorie === 'CC');
  }

}
