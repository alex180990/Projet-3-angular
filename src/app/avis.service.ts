import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Avis } from './avis';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  API_URL = "http://localhost/angular_TP2/avis/"

  constructor(private http: HttpClient) { }

  addAvis(avis:Avis):Observable<void>{
    return this.http.post<void>(this.API_URL, avis, httpOptions)
  }

  deleteVideo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}?id=${id}`);
  }
}
