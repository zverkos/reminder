import {Injectable, signal} from '@angular/core';
import {BaseReminder} from './reminder';
import {ReminderDTO} from './reminder-dto';

@Injectable({
  providedIn: "root"
})
export class ReminderData {
  private readonly reminderDTO = ReminderDTO;

  reminderList = signal(this.reminderDTO);

  private setReminderList(reminderList: BaseReminder[]) {
    this.reminderList.set(reminderList);
  }

  private getReminderList(): BaseReminder[] {
    return [...this.reminderList()];
  }

  updateReminder(updatedReminder: BaseReminder) {
    const reminderList = this.getReminderList();
    const reminderListPosition = reminderList
      .findIndex((reminder: BaseReminder) => reminder.id === updatedReminder.id);
    reminderList[reminderListPosition] = new BaseReminder(updatedReminder);
    this.setReminderList(reminderList);
  }

  checkReminderExists(reminderId: string): boolean {
    return this.getReminderList().some(
      (reminder: BaseReminder) => reminder.id === reminderId
    );
  }

  getReminderById(reminderId: string): BaseReminder {
    const reminderList = this.getReminderList();
    const reminderListPosition = reminderList
      .findIndex((reminder: BaseReminder) => reminder.id === reminderId);
    return reminderList[reminderListPosition];
  }
}
