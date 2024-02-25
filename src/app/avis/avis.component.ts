import { Component, Input } from '@angular/core';
import { Avis } from '../avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent {
  @Input() avis: Avis = {} as Avis;
}
