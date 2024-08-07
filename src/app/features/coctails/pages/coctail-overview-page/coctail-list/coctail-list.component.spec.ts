import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailListComponent } from './coctail-list.component';

describe('CoctailListComponent', () => {
  let component: CoctailListComponent;
  let fixture: ComponentFixture<CoctailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoctailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoctailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
