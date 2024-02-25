import { Pipe, PipeTransform } from '@angular/core';

import { Video } from './video';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(videos: Video[]): Video[] {
    return videos.filter(video => video.score > 1000);
  }
}