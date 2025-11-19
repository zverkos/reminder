import {Component, inject} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import {MatCard, MatCardContent} from '@angular/material/card';
import {Router} from '@angular/router';
import {ReminderData} from '../reminder-data';
import {ToTableDateLocal} from '../../../core/to-table-date-local';
import {Header} from '../../../core/header/header';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.html',
  styleUrls: ['./reminder-list.scss'],
  imports: [
    MatTable,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatCell,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatCard,
    MatCardContent,
    ToTableDateLocal,
    Header,
  ],
})
export class ReminderList {
  router = inject(Router);
  reminderData = inject(ReminderData);

  reminderList = this.reminderData.reminderList;

  readonly displayedColumns: string[] = [
    'status',
    'shortDescription',
    'creationDateTime',
    'executionDateTime',
  ];

  onRowDoubleClick(event: {id: string}) {
    this.router.navigate([event.id])
  }
}
