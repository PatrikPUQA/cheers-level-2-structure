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
  initialValue = input(false);
  inputId = input<string | number>();
  toggled = output<boolean>();

  protected readonly favouriteFormControl = new FormControl<boolean>(false);
  private formControlSub: Subscription | undefined | null;

  ngOnInit(): void {
    this.favouriteFormControl.setValue(this.initialValue(), {
      emitEvent: false,
    });

    this.formControlSub = this.favouriteFormControl.valueChanges
      .pipe(
        tap((value) => {
          this.toggled.emit(!!value);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.formControlSub?.unsubscribe();
  }
}
