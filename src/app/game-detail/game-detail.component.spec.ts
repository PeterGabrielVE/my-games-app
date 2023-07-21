import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Game } from '../game';
import { GamesService } from '../games.service';
import { GameDetailComponent } from './game-detail.component';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;
  let gamesService: jasmine.SpyObj<GamesService>;

  beforeEach(async () => {
    const gamesServiceSpy = jasmine.createSpyObj('GamesService', ['getGame']);

    await TestBed.configureTestingModule({
      declarations: [ GameDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
        { provide: GamesService, useValue: gamesServiceSpy }
      ]
    })
    .compileComponents();

    gamesService = TestBed.inject(GamesService) as jasmine.SpyObj<GamesService>;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDetailComponent]
    });
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get game detail', () => {
    const game: Game = {
      id: 1,
      title: 'Test Game',
      thumbnail: 'https://example.com/test.jpg',
      short_description: 'This is a test game.',
      game_url: 'https://example.com/test-game',
      genre: 'Test Genre',
      platform: 'Test Platform',
      publisher: 'Test Publisher',
      developer: 'Test Developer',
      release_date: '2022-01-01',
      freetogame_profile_url: 'https://example.com/test-game-profile'
    };

    gamesService.getGame.and.returnValue(of(game));

    component.ngOnInit();

    expect(gamesService.getGame).toHaveBeenCalledWith('1');
    expect(component.game).toEqual(game);
  });

  it('should display game detail', () => {
    component.game = {
      id: 1,
      title: 'Test Game',
      thumbnail: 'https://example.com/test.jpg',
      short_description: 'This is a test game.',
      game_url: 'https://example.com/test-game',
      genre: 'Test Genre',
      platform: 'Test Platform',
      publisher: 'Test Publisher',
      developer: 'Test Developer',
      release_date: '2022-01-01',
      freetogame_profile_url: 'https://example.com/test-game-profile'
    };

    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.game-title');
    expect(titleElement.textContent).toContain('Test Game');

    const thumbnailElement = fixture.nativeElement.querySelector('.game-thumbnail');
    expect(thumbnailElement.src).toBe('https://example.com/test.jpg');

    const descriptionElement = fixture.nativeElement.querySelector('.game-description');
    expect(descriptionElement.textContent).toContain('This is a test game.');
  });
});
