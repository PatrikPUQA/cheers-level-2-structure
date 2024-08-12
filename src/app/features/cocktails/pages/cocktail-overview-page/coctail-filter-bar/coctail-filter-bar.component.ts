import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterBarComponent } from '../../../../../shared/components/filter-bar/filter-bar.component';
import { SearchComponent } from '../../../../../shared/components/search/search.component';

@Component({
  selector: 'app-coctail-filter-bar',
  standalone: true,
  imports: [FilterBarComponent, SearchComponent],
  templateUrl: './coctail-filter-bar.component.html',
  styleUrl: './coctail-filter-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoctailFilterBarComponent {
  onSearch(searchTerm: string): void {
    console.log('searching:', searchTerm);
  }
}
