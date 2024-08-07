import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CoctailService } from '../../../services/coctail.service';

@Component({
  selector: 'app-coctail-detail',
  standalone: true,
  imports: [],
  templateUrl: './coctail-detail.component.html',
  styleUrl: './coctail-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoctailDetailComponent {}
