import { Component, Input } from '@angular/core';

import { Video } from '../video'

@Component({
  selector: 'app-video-mini',
  templateUrl: './video-mini.component.html',
  styleUrls: ['./video-mini.component.css']
})
export class VideoMiniComponent {
  @Input() video: Video = {} as Video;
}
