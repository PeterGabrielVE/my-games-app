import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit{

  game: Game;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
    ) {
      this.game = {} as Game;
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.gamesService.getGame(id).subscribe(
      (data: Game) => {
        this.game = data;
      }
    );
  }
}
