import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game';

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


  @Output() buscar = new EventEmitter<any>();

  constructor(private gamesService: GamesService) {
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
    //alert(this.gamesService.name)
     /*this.filteredGames = this.games.filter(game => game
       /*(game.title.toLowerCase().indexOf(this.name.toLowerCase()) !== -1 || !this.name) &&
       (game.genre === this.genreFilter || !this.genreFilter || this.genreFilter === 'all') &&
       (game.platform === this.platformFilter || !this.platformFilter || this.platformFilter === 'all')
     );*/

    /* this.filteredGames = this.games.filter(game =>
      (game.title.toLowerCase().indexOf(this.gamesService.name.toLowerCase()) !== -1 || !this.gamesService.name));
      */
      this.gamesService.SearchGame(this.gamesService.name,'','').subscribe(
        (filteredGames) => {
          console.log(filteredGames)
          return this.games = filteredGames;
        }
      );
      //return this.games = this.filteredGames;
   }


}
