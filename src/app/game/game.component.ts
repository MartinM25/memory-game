import { ChangeDetectionStrategy, Component, ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { QuitComponent } from '../quit/quit.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  openDialog() {
    let dialogRef = this.dialog.open(QuitComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'quit') {
        this.resetGame();
        this.cdr.detectChanges(); // Trigger change detection
      }
    });
  }

  squares = [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    { id: 4, color: 'yellow' },
  ];

  // Initialization
  gameSequence: any[] = [];
  userSequence: any[] = [];

  round: number = 0;
  score: number = 0;

  gameActive: boolean = false;

  // Function for making a square shake!
  shakeSquare(square: HTMLElement) {
    square.classList.add('shake');
    setTimeout(() => {
      square.classList.remove('shake');
    }, 500);
  };

  // New Round: add new random square to the sequence
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
          this.shakeSquare(squareElement);
        }
      }, 1000 * index);
    });
  };

  // Check if user sequance matches game sequence
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

  };

  // Handle user clicks on a square
  handleSquareClick(square: any) {
    if (!this.gameActive) return;
    this.userSequence.push(square);

    const squareElement = document.getElementById(`square-${square.id}`);
    if (squareElement) {
      squareElement.classList.add('clicked');
      setTimeout(() => {
        squareElement.classList.remove('clicked');
      }, 200);
    }

    this.checkSequence();
  }

  // Reset the game
  resetGame() {
    this.gameSequence = [];
    this.userSequence = [];
    this.round = 0;
    this.score = 0;
    this.gameActive = false;
  };

  // Start the game
  startGame() {
    this.gameActive = true;
    this.newRound();
  }

  // Quit the game
  quitGame() {
    this.resetGame();
  }

}
