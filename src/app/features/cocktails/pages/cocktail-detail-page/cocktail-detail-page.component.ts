import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from '../../models/cocktail';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { BackButtonComponent } from '../../../../common/components/back-button/back-button.component';

@Component({
  selector: 'app-cocktail-detail-page',
  standalone: true,
  imports: [NgIf, AsyncPipe, BackButtonComponent],
  templateUrl: './cocktail-detail-page.component.html',
  styleUrl: './cocktail-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly cocktailService = inject(CocktailService);

  cocktail$: Observable<Cocktail | null>;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cocktail$ = this.cocktailService.getCocktailById(id);
  }
}
