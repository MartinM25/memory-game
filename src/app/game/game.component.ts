import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  squares = [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    { id: 4, color: 'yellow' }
  ];

  gameSequence: any[] = [];
  userSequence: any[] = [];

  round: number = 0;
  score: number = 0;

  gameActive: boolean = false;

  // Blink a square by adding a 'blink' class for a short time
  blinkSquare(square: HTMLElement) {
    square.classList.add('blink');
    setTimeout(() => {
      square.classList.remove('blink');
    }, 500);
  }

  // Start a new round: add a new random squre to the sequence
  newRound() {
    if (!this.gameActive) return;

    this.userSequence = [];
    this.round++;
    this.score = this.round;

    const randomSquare = this.squares[Math.floor(Math.random() * this.squares.length)];
    this.gameSequence.push(randomSquare);

    this.gameSequence.forEach((square, index) => {
      setTimeout(() => {
        const squareElement = document.getElementById(`square-${square.id}`);
        if (squareElement) {
          this.blinkSquare(squareElement);
        }
      }, 1000 * index);
    });
  }

  // Check if the user sequence matches the game sequence
  checkSequence() {
    for (let i = 0; i < this.userSequence.length; i++) {
      if (this.userSequence[i].id !== this.gameSequence[i].id) {
        alert(`Game Over! You reached round ${this.round}`);
        this.resetGame();
        return;
      }
    }

    if (this.userSequence.length === this.gameSequence.length) {
      setTimeout(() => this.newRound(), 1000);
    }
  }

  // Handle user clicks on a square
  handleSquareClick(square: any) {
    if (!this.gameActive) return;
    this.userSequence.push(square);
    this.checkSequence();
  }

  // Reset the game
  resetGame() {
    this.gameSequence = [];
    this.userSequence = [];
    this.round = 0;
    this.score = 0;
    this.gameActive = false;
  }

  // Start the game
  startGame() {
    this.gameActive = true;
    this.newRound();
  }

  // Quit the game
  quitGame() {
    alert('You quit the game!');
    this.resetGame();
  }

}
