import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailListItemComponent } from './coctail-list-item.component';

describe('CoctailListItemComponent', () => {
  let component: CoctailListItemComponent;
  let fixture: ComponentFixture<CoctailListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoctailListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoctailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
