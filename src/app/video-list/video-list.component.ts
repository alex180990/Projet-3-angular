import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DynamicPipe } from '../dynamic.pipe';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {

  videos: Video[] = [];
  videosToShow: Video[] = [];
  selectedVideo: Video | undefined;
  showAaCategory: boolean | undefined;
  showBbCategory: boolean | undefined;
  showCcCategory: boolean | undefined;

  selectedPipe: string = 'score'; // pipe par défaut

  constructor(private videoService: VideoService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos().subscribe(
      result => {
        this.videos = result;
        this.videosToShow = this.videos;
        console.log('Videos:', this.videos);
      },
      error => {
        console.error('Erreur lors de la récupération des vidéos :', error);
      }
    );
  }

  toggleAaCategory() {
    this.showAaCategory = !this.showAaCategory;
    this.selectedPipe = this.showAaCategory ? 'categorieAAPipe' : 'score';
  }

  toggleBbCategory() {
    this.showBbCategory = !this.showBbCategory;
    this.selectedPipe = this.showBbCategory ? 'categorieBBPipe' : 'score';
  }

  toggleCcCategory() {
    this.showCcCategory = !this.showCcCategory;
    this.selectedPipe = this.showCcCategory ? 'categorieCCPipe' : 'score';
  }

  showVideo(id: string) {
    if (id) {
      this.videoService.getVideoById(id).subscribe(
        video => {
          this.selectedVideo = video;
          this.snackBar.open("Détails de la vidéo affichés !", undefined, { duration: 2000 });
        },
        error => {
          console.error("Une erreur s'est produite lors de la récupération des détails de la vidéo :", error);
        }
      );
    } else {
      console.error("ID de la vidéo non défini");
    }
  }
}