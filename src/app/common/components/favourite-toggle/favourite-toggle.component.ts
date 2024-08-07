import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favourite-toggle',
  standalone: true,
  imports: [],
  templateUrl: './favourite-toggle.component.html',
  styleUrl: './favourite-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteToggleComponent {}
