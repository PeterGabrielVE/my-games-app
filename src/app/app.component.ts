import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-games-list></app-games-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-games-app';
}
