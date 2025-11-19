import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {ReminderData} from './reminder-data';

export const reminderGuard: CanActivateFn = (route) => {
  const reminderData = inject(ReminderData);
  const router = inject(Router);

  const id = route.paramMap.get('id');

  if (!id) {
    router.navigate(['/not-found']);
    return false;
  }

  const reminderExists = reminderData.checkReminderExists(id);

  if (!reminderExists) {
    router.navigate(['/not-found']);
    return false;
  }

  return true;
};
