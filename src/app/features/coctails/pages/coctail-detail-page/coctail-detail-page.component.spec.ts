import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailDetailPageComponent } from './coctail-detail-page.component';

describe('CoctailDetailPageComponent', () => {
  let component: CoctailDetailPageComponent;
  let fixture: ComponentFixture<CoctailDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoctailDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoctailDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
