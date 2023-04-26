import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumDonneesComponent } from './minimum-donnees.component';

describe('MinimumDonneesComponent', () => {
  let component: MinimumDonneesComponent;
  let fixture: ComponentFixture<MinimumDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimumDonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimumDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
