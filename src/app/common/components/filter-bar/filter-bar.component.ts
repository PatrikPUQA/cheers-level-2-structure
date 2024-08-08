import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBarComponent {
  @Input() name?: string;
}
