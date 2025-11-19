import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <a class="logo" routerLink="/">Reminder</a>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.scss',
  imports: [
    RouterOutlet,
    MatToolbar,
    RouterLink,
  ],
  providers: [
    provideNativeDateAdapter(),
  ]
})
export class App {
}
