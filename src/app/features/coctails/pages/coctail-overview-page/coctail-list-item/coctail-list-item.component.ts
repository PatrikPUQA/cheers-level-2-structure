import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-coctail-list-item',
  standalone: true,
  imports: [],
  templateUrl: './coctail-list-item.component.html',
  styleUrl: './coctail-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoctailListItemComponent {}
