import { Directive, effect, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[appTag]',
  standalone: true,
})
export class TagDirective {
  backgroundColor = input('transparent', { alias: 'appTag' });
  @HostBinding('style') get style(): { [klass: string]: any } {
    return {
      'background-color': this.backgroundColor(),
      color: 'white',
      display: 'inline-block',
      'border-radius': '1em',
      padding: '0.2em 0.4em',
    };
  }
}
