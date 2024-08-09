import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-favourite-toggle',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './favourite-toggle.component.html',
  styleUrl: './favourite-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteToggleComponent implements OnInit, OnDestroy {
  protected readonly favouriteFormControl = new FormControl<boolean>(false);

  initialValue = input(false);

  private formControlSub: Subscription | undefined | null;

  toggled = output<boolean>();

  ngOnInit(): void {
    this.favouriteFormControl.setValue(this.initialValue(), {
      emitEvent: false,
    });

    this.formControlSub = this.favouriteFormControl.valueChanges
      .pipe(
        tap((value) => {
          console.log('favouriteFormControl', value);
          this.toggled.emit(!!value);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.formControlSub?.unsubscribe();
  }
}
