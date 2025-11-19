import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toTableDateLocal',
  standalone: true,
})
export class ToTableDateLocal implements PipeTransform {
  transform(value: Date | string): string {
    if (!value) return '';

    const date = value instanceof Date ? value : new Date(value);

    return date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
