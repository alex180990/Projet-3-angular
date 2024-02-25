import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { NgForm } from '@angular/forms';
import { Auteur } from '../auteur';

@Component({
  selector: 'app-formulaire-hero',
  templateUrl: './formulaire-hero.component.html',
  styleUrls: ['./formulaire-hero.component.css']
})
export class FormulaireHeroComponent implements OnInit{

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

    constructor(private videoService: VideoService, public dialogRef: MatDialogRef<FormulaireHeroComponent>, @Inject(MAT_DIALOG_DATA) public data: Video) { 
      if (data) {
        this.video = data;
        }
        
    }
  
    ngOnInit(): void {}

    addVideo(videoForm: NgForm) {
      if (videoForm.valid) {
        const formValues = videoForm.value;
    
        if (!this.video.id) {
          this.video = {
            nom: formValues.nom,
            description: formValues.description,
            categorie: formValues.categorie,
            code: formValues.code ? formValues.code: '00',
            sous_titres: formValues.sous_titres,
            auteur: {
              id_auteur: '',
              nom_auteur: formValues.nom_auteur,
              utilisateur_auteur: formValues.utilisateur_auteur,
              verifie_auteur: 0,
              description_auteur: formValues.description_auteur,
              courriel: formValues.courriel ? formValues.courriel: '',
              facebook: formValues.facebook ? formValues.facebook: '',
              instagram: formValues.instagram ? formValues.instagram: '',
              twitch: formValues.twitch ? formValues.twitch: '',
              site_web: formValues.site_web ? formValues.site_web: ''
            },
            date_publication: '',
            duree: 10,
            nombre_vues: 0,
            score: 0,
            avis: []
          };
        }
    
        this.videoService.addVideo(this.video).subscribe(
          _ => {
            videoForm.resetForm();
            this.dialogRef.close();
          }
        );
      }
    }

    updateVideo(videoForm: NgForm) {
      if (videoForm.valid) {
        this.videoService.updateVideo(this.video).subscribe(
          _ => {
            videoForm.resetForm();
            console.log(videoForm.resetForm());
            this.dialogRef.close();
            window.location.reload();
          }
        );
      }
    }
}
