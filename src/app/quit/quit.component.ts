import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-quit',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quit.component.html',
  styleUrl: './quit.component.css'
})
export class QuitComponent {
  constructor(public dialogRef: MatDialogRef<QuitComponent>) {}

  quit() {
    this.dialogRef.close('quit');
  }
}
