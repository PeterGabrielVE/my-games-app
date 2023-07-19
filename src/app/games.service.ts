import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private BASE_URL = 'https://www.freetogame.com/api';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/games`);
  }

  getGame(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/game?id=${id}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/genres`);
  }

  getPlataformas(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/platforms`);
  }

  SearchGame(name: string, genre: string, plataform: string): Observable<any> {
    let url = `${this.BASE_URL}/games?`;
    if (name) url += `&search=${name}`;
    if (genre) url += `&category=${genre}`;
    if (plataform) url += `&platform=${plataform}`;
    return this.http.get(url);
  }

}
