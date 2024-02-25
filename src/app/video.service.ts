import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Video } from './video';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  API_URL = "http://localhost/angular_TP2/"

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.API_URL);
  }

  getVideoById(id: string): Observable<Video> {
    const url = `${this.API_URL}?id=${id}`;
    return this.http.get<Video>(url);
  }

  addVideo(video: Video): Observable<void> {
    return this.http.post<void>(this.API_URL, video, httpOptions);
  }

  updateVideo(video: Video): Observable<void> {
    return this.http.put<void>(`${this.API_URL}?id=${video.id}`, video, httpOptions);
  }

  deleteVideo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}?id=${id}`);
  }
}
