import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPrettyArray',
  standalone: true,
})
export class PrettyArrayPipe implements PipeTransform {
  transform(value: Array<string | number>, joint: string = ' | '): string {
    return value.join(joint);
  }
}
