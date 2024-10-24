import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {
  rules: string[] = [
    'Objective: The goal of the game is to successfully remember and click the squares in the correct sequence as they blink.',
    'Setup: The game starts with four colored squares: red, blue, green, and yellow. Each square is initially visible.',
    'Starting the Game: Click the Start Game button to begin. The game will start at round 1.',
    'Game Play: At the beginning of each round, one square will blink in its intended color. You need to click on the squares in the order they blinked.',
    'Clicking the Squares: When you click on a square, it will change to grey (indicating it was clicked). You must remember the order of the squares that blinked.',
    'Game Over: If you click a square out of order, the game will end, and you will receive an alert indicating your highest round.',
    'Scoring: Your score increases with each successful round. The score represents the highest round you reached.',
    'Quitting the Game: You can quit the game by clicking the Quit Game button, which will confirm your decision.'
  ];
}
