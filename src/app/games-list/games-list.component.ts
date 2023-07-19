import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  SearchGame($event: any) {
    throw new Error('Method not implemented.');
  }

  games: Game[];

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
}
