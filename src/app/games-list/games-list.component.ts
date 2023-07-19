import { Component, OnInit } from '@angular/core';
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


  onSearch() {
    const filteredGames = this.games.filter(game =>
      game.title.toUpperCase().includes(this.SearchGame.toUpperCase()) // Llama toUpperCase() en la variable game.name
    );
    // Resto del código del método
  }
}
