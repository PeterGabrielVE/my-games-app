import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameCardComponent } from './game-card.component';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;

    // Asignar valores de prueba al input game
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display game title', () => {
    const titleElement = fixture.nativeElement.querySelector('.game-title');
    expect(titleElement.textContent).toContain('Test Game');
  });

  it('should display game thumbnail', () => {
    const thumbnailElement = fixture.nativeElement.querySelector('.game-thumbnail');
    expect(thumbnailElement.src).toBe('https://example.com/test.jpg');
  });

  it('should display game short description', () => {
    const descriptionElement = fixture.nativeElement.querySelector('.game-description');
    expect(descriptionElement.textContent).toContain('This is a test game.');
  });

  it('should initialize game with default values if not provided', () => {

    fixture.detectChanges();
    expect(component.game).toEqual({
      id: 0,
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
    });
  });
});
