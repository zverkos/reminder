import {StatusType} from './statuses';

export class BaseReminder {
  id: string = '';
  status = StatusType.New;
  creationDateTime: Date = new Date();
  executionDateTime: Date = new Date();
  shortDescription: string = '';
  fullDescription: string = '';

  constructor(data?: BaseReminder) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
