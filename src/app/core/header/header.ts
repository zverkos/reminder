import {Component, input} from '@angular/core';
import {MatCard, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-title',
  template: `
    <mat-card class="header">
      <mat-card-title>
        {{ text() }}
      </mat-card-title>
    </mat-card>`,
  imports: [
    MatCard,
    MatCardTitle
  ],
  styles: `
    .header {
      margin-bottom: 20px;
      padding: 8px 20px 6px;
    }
  `
})
export class Header {
  text = input('');
}
