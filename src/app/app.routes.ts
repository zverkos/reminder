import {Routes} from '@angular/router';
import {ReminderList} from './features/reminder/reminder-list/reminder-list';
import {ReminderDetail} from './features/reminder/reminder-detail/reminder-detail';
import {EmptyPage} from './features/empty-page/empty-page';
import {reminderGuard} from './features/reminder/reminder-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ReminderList
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    component: EmptyPage
  },
  {
    path: ':id',
    component: ReminderDetail,
    canActivate: [reminderGuard]
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
