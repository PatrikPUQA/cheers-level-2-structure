import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteToggleComponent } from './favourite-toggle.component';

describe('FavouriteToggleComponent', () => {
  let component: FavouriteToggleComponent;
  let fixture: ComponentFixture<FavouriteToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
