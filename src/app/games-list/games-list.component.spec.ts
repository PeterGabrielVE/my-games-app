import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GamesListComponent } from './games-list.component';
import { of } from 'rxjs';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;
  let gamesService: jasmine.SpyObj<GamesService>;

  beforeEach(async () => {
    const gamesServiceSpy = jasmine.createSpyObj('GamesService', ['getGames']);

    await TestBed.configureTestingModule({
      declarations: [ GamesListComponent ],
      providers: [
        { provide: GamesService, useValue: gamesServiceSpy },
        { provide: Router, useValue: {} }
      ]
    })
    .compileComponents();

    gamesService = TestBed.inject(GamesService) as jasmine.SpyObj<GamesService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of games', () => {
    const games: Game[] = [
      {
        id: 1,
        title: 'Test Game 1',
        thumbnail: 'https://example.com/test1.jpg',
        short_description: 'This is a test game 1.',
        game_url: 'https://example.com/test-game1',
        genre: 'Test Genre 1',
        platform: 'Test Platform 1',
        publisher: 'Test Publisher 1',
        developer: 'Test Developer 1',
        release_date: '2022-01-01',
        freetogame_profile_url: 'https://example.com/test-game1-profile'
      },
      {
        id: 2,
        title: 'Test Game 2',
        thumbnail: 'https://example.com/test2.jpg',
        short_description: 'This is a test game 2.',
        game_url: 'https://example.com/test-game2',
        genre: 'Test Genre 2',
        platform: 'Test Platform 2',
        publisher: 'Test Publisher 2',
        developer: 'Test Developer 2',
        release_date: '2022-02-01',
        freetogame_profile_url: 'https://example.com/test-game2-profile'
      }
    ];

    spyOn(gamesService, 'getGames').and.returnValue(of(games));

    component.ngOnInit();

    fixture.detectChanges();

    const gameElements = fixture.nativeElement.querySelectorAll('.game-item');
    expect(gameElements.length).toBe(2);

    const titleElement = gameElements[0].querySelector('.game-title');
    expect(titleElement.textContent).toContain('Test Game 1');

    const thumbnailElement = gameElements[0].querySelector('.game-thumbnail');
    expect(thumbnailElement.src).toBe('https://example.com/test1.jpg');

    const descriptionElement = gameElements[0].querySelector('.game-description');
    expect(descriptionElement.textContent).toContain('This is a test game 1.');

    const genreElement = gameElements[0].querySelector('.game-genre');
    expect(genreElement.textContent).toContain('Test Genre 1');

    const platformElement = gameElements[0].querySelector('.game-platform');
    expect(platformElement.textContent).toContain('Test Platform 1');
  });

  it('should filter games', () => {
    const games: Game[] = [
      {
        id: 1,
        title: 'Test Game 1',
        thumbnail: 'https://example.com/test1.jpg',
        short_description: 'This is a test game 1.',
        game_url: 'https://example.com/test-game1',
        genre: 'Test Genre 1',
        platform: 'Test Platform 1',
        publisher: 'Test Publisher 1',
        developer: 'Test Developer 1',
        release_date: '2022-01-01',
        freetogame_profile_url: 'https://example.com/test-game1-profile'
      },
      {
        id: 2,
        title: 'Test Game 2',
        thumbnail: 'https://example.com/test2.jpg',
        short_description: 'This is a test game 2.',
        game_url: 'https://example.com/test-game2',
        genre: 'Test Genre 2',
        platform: 'Test Platform 2',
        publisher: 'Test Publisher 2',
        developer: 'Test Developer 2',
        release_date: '2022-02-01',
        freetogame_profile_url: 'https://example.com/test-game2-profile'
      }
    ];

    spyOn(gamesService, 'getGames').and.returnValue(of(games));

    component.ngOnInit();

    gamesService.name = 'Test Game 1';
    gamesService.genre = 'Test Genre 1';
    gamesService.platform = 'Test Platform 1';

    component.onSearch();

    fixture.detectChanges();

    const gameElements = fixture.nativeElement.querySelectorAll('.game-item');
    expect(gameElements.length).toBe(1);

    const titleElement = gameElements[0].querySelector('.game-title');
    expect(titleElement.textContent).toContain('Test Game 1');

    const thumbnailElement = gameElements[0].querySelector('.game-thumbnail');
    expect(thumbnailElement.src).toBe('https://example.com/test1.jpg');

    const descriptionElement = gameElements[0].querySelector('.game-description');
    expect(descriptionElement.textContent).toContain('This is a test game 1.');

    const genreElement = gameElements[0].querySelector('.game-genre');
    expect(genreElement.textContent).toContain('Test Genre 1');

    const platformElement = gameElements[0].querySelector('.game-platform');
    expect(platformElement.textContent).toContain('Test Platform 1');
  });
});
