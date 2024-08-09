import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from '../../models/cocktail';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { BackButtonComponent } from '../../../../common/components/back-button/back-button.component';
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
  private readonly cocktailService = inject(CocktailService);

  cocktail$: Observable<Cocktail | null>;

  id = input.required<string>();

  ngOnInit(): void {
    this.cocktail$ = this.cocktailService.getCocktailById(this.id());
  }
}
