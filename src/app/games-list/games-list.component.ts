import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Game[];

  SearchGame: string = '';

  filteredGames: Game[] = [];
  genres: string[] = [];
  platforms: string[] = [];
  nombre= '';
  genero = '';
  plataforma = '';

  constructor(private gamesService: GamesService, public router2:Router) {
    this.games = [];
   }

  ngOnInit(): void {

    this.gamesService.getGames().subscribe(
      (data: Game[]) => {
        this.games = data;
      }
    );

  }


  onSubmit(): void {

    this.onSearch()
  }

  onSearch() {
      let games2 = this.gamesService.getGames().pipe(
          map((games: any[]) => {
            return games.filter((game: { title: string; genre: string; platform: string; }) => {
              const nameFilter = this.gamesService.name ? game.title.toLowerCase().includes(this.gamesService.name.toLowerCase()) : true;
              const genreFilter = this.gamesService.genre ? game.genre.toLowerCase() === this.gamesService.genre.toLowerCase() : true;
              const platformFilter = this.gamesService.platform ? game.platform.toLowerCase() === this.gamesService.platform.toLowerCase() : true;
              return nameFilter && genreFilter && platformFilter;
            })
          })
        )
        return games2.subscribe(
          (data: Game[]) =>
          {
            this.games = data;
          }
        );


   }


}
