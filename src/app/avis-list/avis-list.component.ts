import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Video } from '../video';
import { Auteur } from '../auteur';
import { Avis } from "../avis";
import { VideoService } from '../video.service';


@Component({
  selector: 'app-avis-list',
  templateUrl: './avis-list.component.html',
  styleUrls: ['./avis-list.component.css']
})
export class AvisListComponent implements OnInit{
  video: Video = {
    nom: '',
    description: '',
    code: '',
    auteur: {} as Auteur,
    date_publication: '',
    duree: 0,
    nombre_vues: 0,
    score: 0,
    sous_titres: '',
    avis: [] as Avis[],
  };

  isAvisArray(): boolean {
    return Array.isArray(this.video.avis);
  }

  constructor(private VideoService:VideoService, private route:ActivatedRoute ){}

  ngOnInit(): void {
    this.getVideo()
  }

  getVideo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.VideoService.getVideoById(id)
        .subscribe(resultat => {
          this.video = resultat;
          console.log(this.video);
        });
    }
  }
  
}
