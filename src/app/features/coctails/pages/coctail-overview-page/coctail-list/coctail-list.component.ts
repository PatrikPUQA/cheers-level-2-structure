import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-coctail-list',
  standalone: true,
  imports: [],
  templateUrl: './coctail-list.component.html',
  styleUrl: './coctail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoctailListComponent {}
