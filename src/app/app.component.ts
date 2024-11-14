import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GameComponent,
    RulesComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memory-game';
}
