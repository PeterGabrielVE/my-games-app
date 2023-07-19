import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesFilterComponent } from './games-filter/games-filter.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameCardComponent } from './game-card/game-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesFilterComponent,
    GameDetailComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
