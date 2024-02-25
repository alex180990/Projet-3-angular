import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AdministrationComponent } from './administration/administration.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'a-propos', component: AProposComponent},
  {path: 'administration', component:AdministrationComponent},
  {path: 'video-detail/:id',component:VideoDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
