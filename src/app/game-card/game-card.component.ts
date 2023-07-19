import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit{

  @Input() game: Game;

  constructor() {
    this.game = { id: 0,
      title: '',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: '',
      platform: '',
      publisher: '',
      developer: '',
      release_date: '',
      freetogame_profile_url: ''
    };
  }

  ngOnInit(): void {
      if (!this.game) {
        this.game = { id: 0,
          title: '',
          thumbnail: '',
          short_description: '',
          game_url: '',
          genre: '',
          platform: '',
          publisher: '',
          developer: '',
          release_date: '',
          freetogame_profile_url: ''
        };
      }
  }
}

