import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatTooltipModule } from '@angular/material/tooltip';

/* Composant */

import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AdministrationComponent } from './administration/administration.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

/*intégration des service HTTP dans l'application */

import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './video.service';
//import { AvisService } from './avis.service';

/* formulaire */

import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/* Tableau angular */

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

/* Dialog */

import { MatDialogModule} from '@angular/material/dialog';
import { AvisComponent } from './avis/avis.component';
import { AvisListComponent } from './avis-list/avis-list.component';
import { VideoMiniComponent } from './video-mini/video-mini.component';
import { VideoListComponent } from './video-list/video-list.component';
import { FormulaireHeroComponent } from './formulaire-hero/formulaire-hero.component';
import { FormulaireAvisComponent } from './formulaire-avis/formulaire-avis.component';
import { ScorePipe } from './score.pipe';
import { FormatDureePipe } from './format-duree.pipe';
import { FormatNombrePipe } from './format-nombre.pipe';
import { CategorieAAPipe } from './categorie-aa.pipe';
import { DynamicPipe } from './dynamic.pipe';
import { CategorieBbPipe } from './categorie-bb.pipe';
import { CategorieCcPipe } from './categorie-cc.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AProposComponent,
    AdministrationComponent,
    VideoDetailComponent,
    AvisComponent,
    AvisListComponent,
    VideoMiniComponent,
    VideoListComponent,
    FormulaireHeroComponent,
    FormulaireAvisComponent,
    ScorePipe,
    FormatDureePipe,
    FormatNombrePipe,
    CategorieAAPipe,
    DynamicPipe,
    CategorieBbPipe,
    CategorieCcPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatDialogModule,
    BrowserAnimationsModule,
    
    FormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    MatTooltipModule
  ],
  providers: [VideoService/*,AvisService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
