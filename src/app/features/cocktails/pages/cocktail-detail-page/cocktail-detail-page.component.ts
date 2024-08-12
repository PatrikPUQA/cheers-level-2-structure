import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../common/models/cocktail';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { BackButtonComponent } from '../../../../shared/components/back-button/back-button.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

@Component({
  selector: 'app-cocktail-detail-page',
  standalone: true,
  imports: [NgIf, AsyncPipe, BackButtonComponent, CocktailDetailComponent],
  templateUrl: './cocktail-detail-page.component.html',
  styleUrl: './cocktail-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailDetailPageComponent implements OnInit {
  id = input.required<string>();

  private readonly cocktailService = inject(CocktailService);

  cocktail$: Observable<Cocktail | null>;

  ngOnInit(): void {
    this.cocktail$ = this.cocktailService.getCocktailById(this.id());
  }
}
