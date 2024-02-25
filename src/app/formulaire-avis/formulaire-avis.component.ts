import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Avis } from '../avis';
import { AvisService } from '../avis.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire-avis',
  templateUrl: './formulaire-avis.component.html',
  styleUrls: ['./formulaire-avis.component.css']
})
export class FormulaireAvisComponent implements OnInit{

  avis: Avis = {
    note_avis:0,
    commentaire_avis:'',
    fk_video:0,
  }
  
  constructor(private avisService: AvisService, public dialogRef: MatDialogRef<FormulaireAvisComponent>, @Inject(MAT_DIALOG_DATA) public data: number, private route: ActivatedRoute) { 
    if (data) {
      this.avis.fk_video = data;
      }
  }

  ngOnInit(): void {}


  addAvis(avisForm: NgForm) {
    if (avisForm.valid) {
      const formValues = avisForm.value;
  
      this.avis = {
        note_avis: formValues.note_avis,
        commentaire_avis: formValues.commentaire_avis,
        fk_video: this.avis.fk_video,
      };
  
      this.avisService.addAvis(this.avis).subscribe(
        _ => {
          avisForm.resetForm();
          this.dialogRef.close();
        }
      );
  
      this.route.paramMap.subscribe(params => {
        const videoId = params.get('id');
        if (videoId) {
          console.log(videoId);
        }
      });
    }
  }
}