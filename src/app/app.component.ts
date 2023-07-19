import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Listado de juegos</h1>
    <app-games-list></app-games-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-games-app';
}
