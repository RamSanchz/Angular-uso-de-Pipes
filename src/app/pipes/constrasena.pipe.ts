import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constrasena',
})
export class ConstrasenaPipe implements PipeTransform {
  transform(value: string, mostrar: boolean = false): string {
    return mostrar ? '*'.repeat(value.length) : value;
  }
}
