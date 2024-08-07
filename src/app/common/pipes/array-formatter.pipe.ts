import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyArray',
  standalone: true,
})
export class PrettyArrayPipe implements PipeTransform {
  transform(value: Array<string | number>, joint: string = '|'): unknown {
    return null;
  }
}
