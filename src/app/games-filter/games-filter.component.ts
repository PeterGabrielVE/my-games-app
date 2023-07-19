import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-filter',
  templateUrl: './games-filter.component.html',
  styleUrls: ['./games-filter.component.css']
})
export class GamesFilterComponent implements OnInit{

  genres: any;
  platforms: any;

  name = '';
  genre = '';
  platform = '';

  @Output() buscar = new EventEmitter<any>();

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGenres().subscribe(
      (data: any) => {
        this.genres = data;
      }
    );
    this.gamesService.getPlatForms().subscribe(
      (data: any) => {
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
}