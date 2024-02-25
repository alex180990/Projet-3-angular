import { Component, OnInit, ViewChild } from '@angular/core';

import { Video } from '../video';
import { Auteur } from '../auteur';
import { VideoService } from '../video.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialog } from '@angular/material/dialog';
import { FormulaireHeroComponent } from '../formulaire-hero/formulaire-hero.component';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit{


  dataSourceVideos: MatTableDataSource<Video> = new MatTableDataSource();
  columnsToDisplay = ['id','nom','description','categorie','code','sous_titres', 'date_publication','actions'];

  @ViewChild(MatTable) tableVideos!: MatTable<Video>;

  /* Pour la pagniation et le tri */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

  constructor(private VideoService: VideoService, private _snackBar:MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getVideos()
  }

  getVideos() {
    this.VideoService.getVideos().subscribe(
    resultat => {
      console.log(resultat);

      this.dataSourceVideos = new MatTableDataSource(resultat);


      this.paginator.pageSizeOptions = [5, 10, 25, 100];

      this.dataSourceVideos.paginator = this.paginator;
      this.dataSourceVideos.sort = this.sort;


      this.tableVideos.renderRows();
      }
    );
  }

  showVideo(id: string) {
    if (id) {
      this.VideoService.getVideoById(id).subscribe(
        video => {
          this.video = video;
          this._snackBar.open("Détails du héros affichés !", undefined, { duration: 2000 });
        },
        error => {
          console.error("Une erreur s'est produite lors de la récupération du détail du héros :", error);
        }
      );
    } else {
      console.error("ID de la vidéo non défini");
    }
  }

  deleteVideo(id: string) {
    this.VideoService.deleteVideo(id).subscribe(
      _ => {
        this.getVideos();
        this._snackBar.open("Héro supprimé !", undefined,{duration:2000});
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVideos.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceVideos.paginator) {
      this.dataSourceVideos.paginator.firstPage();
    }
  }

  openDialog(video?: Video) {
    const dialogRef = this.dialog.open(FormulaireHeroComponent, {
      data: video,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._snackBar.open(result, undefined, {
          duration: 2000
        });
        this.getVideos();
      }
    });
  }
}