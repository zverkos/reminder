import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {ReminderData} from '../reminder-data';
import {Statuses, StatusType} from '../statuses';
import {ToFormDataLocal} from '../../../core/to-form-data-local';
import {filter, of, switchMap} from 'rxjs';
import {Header} from '../../../core/header/header';
import {toSignal} from '@angular/core/rxjs-interop';
import {BaseReminder} from '../reminder';

@Component({
  selector: "reminder-detail",
  templateUrl: "./reminder-detail.html",
  styleUrl: "./reminder-detail.scss",
  imports: [
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatCardFooter,
    MatButton,
    Header,
  ],
  providers: [
    ToFormDataLocal,
  ]
})
export class ReminderDetail {
  toFormDataLocal = inject(ToFormDataLocal);
  router = inject(Router);
  route = inject(ActivatedRoute);
  reminderData = inject(ReminderData);
  statuses = Statuses;
  currentId: string = '';

  reminderForm = new FormGroup({
    fullDescription: new FormControl(''),
    shortDescription: new FormControl(''),
    status: new FormControl<StatusType | null>(null),
    executionDateTime: new FormControl(''),
    creationDateTime: new FormControl(''),
  })

  remind = toSignal(this.route.paramMap.pipe(
    filter((params) => params.has('id')),
    switchMap((params) => {
      this.currentId = params.get('id')!;
      const reminder = this.reminderData.getReminderById(this.currentId);
      this.reminderForm.patchValue({
        fullDescription: reminder.fullDescription,
        shortDescription: reminder.shortDescription,
        status: reminder.status,
        executionDateTime: this.toFormDataLocal.transform(reminder.executionDateTime),
        creationDateTime: this.toFormDataLocal.transform(reminder.creationDateTime),
      })
      return of(reminder);
    })
  ))

  onSave(formData: any) {
    this.reminderData.updateReminder({
      ...formData,
      id: this.currentId
    });
    this.openMainPage();
  }

  protected openMainPage() {
    this.router.navigate([''])
  }

  protected readonly BaseReminder = BaseReminder;
}
