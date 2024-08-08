import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
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
export class SearchComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) label: string;
  @Input() searchDelay = 200;

  @Output() termSearched = new EventEmitter<string>();

  @ViewChild('searchInput', { static: true })
  searchInput: ElementRef<HTMLInputElement>;

  private subscription: Subscription | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.subscription = fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(this.searchDelay),
        map(() => this.searchInput.nativeElement.value?.trim()),
        distinctUntilChanged(),
        tap((searchTerm) => this.termSearched.emit(searchTerm))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
