import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TagDirective } from '../../../../common/directives/tag.directive';

@Component({
  selector: 'app-alcoholic-tag',
  standalone: true,
  imports: [NgIf, TagDirective],
  templateUrl: './alcohol-tag.component.html',
  styleUrl: './alcohol-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlcoholTagComponent {
  isAlcoholic = input.required<boolean>();
}
