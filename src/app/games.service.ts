import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private BASE_URL = environment.apiBaseUrl;
  name = '';

  constructor(private http: HttpClient) { }

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

  SearchGame(name: string, genre: string, platform: string): Observable<any> {
    alert(name)
    let url = `${this.BASE_URL}/games?`;
    if (name) url += `&name=${name}`;
    //if (genre) url += `&category=${genre}`;
    //if (platform) url += `&platform=${platform}`;
    return this.http.get(url);
  }

}
