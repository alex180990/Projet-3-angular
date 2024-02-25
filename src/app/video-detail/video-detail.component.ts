import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Video } from '../video';
import { Auteur } from '../auteur';
import { VideoService } from '../video.service';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireAvisComponent } from '../formulaire-avis/formulaire-avis.component';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit{
  video: Video = {
    nom: '',
    description: '',
    categorie: '',
    code: '',
    auteur: {} as Auteur,
    date_publication: '',
    duree: 0,
    nombre_vues: 0,
    score: 0,
    sous_titres: '',
    avis: [],
  };
  private _snackBar: any;

  constructor(private VideoService:VideoService, private route:ActivatedRoute, public dialog: MatDialog ){}

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

  openDialog() {
    const dialogRef = this.dialog.open(FormulaireAvisComponent, {
      data: this.video.id,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._snackBar.open(result, undefined, {
          duration: 2000
        });
        this.getVideo();
      }
    });
  }
}
