import {BaseReminder} from './reminder';
import {StatusType} from './statuses';

export const ReminderDTO: BaseReminder[] = [
  {
    id: '1',
    shortDescription: 'Встреча с клиентом',
    fullDescription: 'Провести встречу с клиентом по обсуждению нового проекта. Подготовить презентацию и договор.',
    creationDateTime: new Date('2024-11-15T10:00:00'),
    executionDateTime: new Date('2024-11-20T14:00:00'),
    status: StatusType.Planned,
  },
  {
    id: '2',
    shortDescription: 'Отправить отчет',
    fullDescription: 'Подготовить и отправить месячный отчет о проделанной работе руководству.',
    creationDateTime: new Date('2024-11-16T09:30:00'),
    executionDateTime: new Date('2024-11-18T17:00:00'),
    status: StatusType.Overdue,
  },
  {
    id: '3',
    shortDescription: 'Код ревью',
    fullDescription: 'Провести код ревью для нового функционала в проекте. Проверить соответствие стандартам.',
    creationDateTime: new Date('2024-11-17T11:00:00'),
    executionDateTime: new Date('2024-11-19T16:00:00'),
    status: StatusType.New,
  },
  {
    id: '4',
    shortDescription: 'Оплатить счета',
    fullDescription: 'Оплатить все счета за коммунальные услуги и интернет до конца месяца.',
    creationDateTime: new Date('2024-11-10T08:00:00'),
    executionDateTime: new Date('2024-11-15T12:00:00'),
    status: StatusType.Completed,
  },
  {
    id: '5',
    shortDescription: 'Посещение врача',
    fullDescription: 'Записаться и сходить на плановый осмотр к терапевту. Взять с собой медицинскую карту.',
    creationDateTime: new Date('2024-11-12T14:20:00'),
    executionDateTime: new Date('2024-11-22T10:30:00'),
    status: StatusType.Planned,
  },
  {
    id: '6',
    shortDescription: 'Обучение новой технологии',
    fullDescription: 'Изучить документацию по Angular Signals и внедрить в текущий проект.',
    creationDateTime: new Date('2024-11-13T16:45:00'),
    executionDateTime: new Date('2024-11-25T18:00:00'),
    status: StatusType.New,
  },
  {
    id: '7',
    shortDescription: 'Покупка продуктов',
    fullDescription: 'Купить продукты на неделю: молоко, хлеб, мясо, овощи, фрукты.',
    creationDateTime: new Date('2024-11-17T19:00:00'),
    executionDateTime: new Date('2024-11-18T20:00:00'),
    status: StatusType.Overdue,
  }
];
