import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game';

@Component({
  selector: 'app-games-filter',
  templateUrl: './games-filter.component.html',
  styleUrls: ['./games-filter.component.css']
})
export class GamesFilterComponent implements OnInit{

  genres: any;
  platforms: any;

  name!: string;

  genre = '';
  platform = '';

  @Output() buscar = new EventEmitter<any>();

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.name = this.gamesService.name;
    this.gamesService.getGenres().subscribe(
      (data: any) => {
        data = data.map((d: { genre: any; }) => d.genre);
        data = Array.from(new Set(data));
        this.genres = data;
      }
    );
    this.gamesService.getPlatForms().subscribe(
      (data: any) => {
        data = data.map((d: { platform: any; }) => d.platform);
        data = Array.from(new Set(data));
        this.platforms = data;
      }
    );
  }

  onSubmit(): void {
    this.buscar.emit({
      name: this.name,
      genre:this.genre,
      platform: this.platform
    });
  }

  modelChangeFn(value: string) {
    this.gamesService.name = value;
  }

  modelChangeGenre(value: string) {
    this.gamesService.genre = value;
  }

  modelChangePlatform(value: string) {
    this.gamesService.platform = value;
  }

}
