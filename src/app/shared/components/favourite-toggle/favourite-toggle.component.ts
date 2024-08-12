import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favourite-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './favourite-toggle.component.html',
  styleUrl: './favourite-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteToggleComponent {
  toggle = model.required<boolean>();
  toggleId = input<string | number>();
}
