import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailOverviewPageComponent } from './coctail-overview-page.component';

describe('CoctailOverviewPageComponent', () => {
  let component: CoctailOverviewPageComponent;
  let fixture: ComponentFixture<CoctailOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoctailOverviewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoctailOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
