import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { startWith, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService  implements OnInit{

  private BASE_URL = environment.apiBaseUrl;
  name = '';
  genre = '';
  platform = '';

  games$!: Observable<any[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.games$ = this.http.get<any[]>(`${this.BASE_URL}/games`);
  }

  getGames(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/games`);
  }

  getGame(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/game?id=${id}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/games`);

  }

  getPlatForms(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/games`);
  }

}
