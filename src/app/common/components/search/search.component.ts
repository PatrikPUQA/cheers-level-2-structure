import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  OnDestroy,
  OnInit,
  output,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Subscription,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  label = input.required<string>();
  searchDelay = input(200);

  termSearched = output<string>();

  @ViewChild('searchInput', { static: true })
  searchInput: ElementRef<HTMLInputElement>;

  private subscription?: Subscription;

  ngOnInit(): void {
    this.termSearched.emit('');
  }

  ngAfterViewInit(): void {
    this.subscription = fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(this.searchDelay()),
        map(() => this.searchInput.nativeElement.value?.trim()),
        distinctUntilChanged(),
        tap((searchTerm) => this.termSearched.emit(searchTerm)),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
