import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FilterBarComponent } from '../../../../../common/components/filter-bar/filter-bar.component';
import { SearchComponent } from '../../../../../common/components/search/search.component';
import { CocktailService } from '../../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-filter-bar',
  standalone: true,
  imports: [FilterBarComponent, SearchComponent],
  templateUrl: './cocktail-filter-bar.component.html',
  styleUrl: './cocktail-filter-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailFilterBarComponent {
  private cocktailService = inject(CocktailService);
  onSearch(searchTerm: string): void {
    console.log('searching:', searchTerm);
    this.cocktailService.filterByName(searchTerm.toLowerCase());
  }
}
