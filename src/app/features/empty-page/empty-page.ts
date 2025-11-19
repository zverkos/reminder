import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-empty-page',
  template: `
    <div class="empty-page-container">
      <mat-card class="empty-page-header">
        <mat-card-title>
          Страница не найдена
        </mat-card-title>
      </mat-card>
      <mat-card>
        <mat-card-content>
          <p>Извините, но запрошенная страница не найдена.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: `
    .empty-page-container {
      padding: 20px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .empty-page-header {
      margin-bottom: 20px;
      padding: 8px 20px 6px;
    }
  `,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent
  ],
})
export class EmptyPage {

}
