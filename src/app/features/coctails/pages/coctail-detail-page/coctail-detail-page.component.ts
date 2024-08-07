import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CoctailService } from '../../services/coctail.service';

@Component({
  selector: 'app-coctail-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './coctail-detail-page.component.html',
  styleUrl: './coctail-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoctailDetailPageComponent {
  private readonly coctailService = inject(CoctailService);
}
