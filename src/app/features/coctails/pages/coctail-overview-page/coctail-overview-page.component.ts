import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CoctailService } from '../../services/coctail.service';

@Component({
  selector: 'app-coctail-overview-page',
  standalone: true,
  imports: [],
  templateUrl: './coctail-overview-page.component.html',
  styleUrl: './coctail-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoctailOverviewPageComponent {
  private readonly coctailService = inject(CoctailService);
}
