export class Status {
  name: StatusType = StatusType.New;

  constructor(data: Status) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

export enum StatusType {
  Completed = 'Исполнен',
  New = 'Новый',
  Overdue = 'Просрочен',
  Planned = 'Запланирован',
}

export const Statuses: Status[] = [
  { name: StatusType.Completed },
  { name: StatusType.New },
  { name: StatusType.Overdue },
  { name: StatusType.Planned },
];
