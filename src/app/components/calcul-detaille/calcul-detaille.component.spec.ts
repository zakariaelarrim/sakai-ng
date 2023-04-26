import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculDetailleComponent } from './calcul-detaille.component';

describe('CalculDetailleComponent', () => {
  let component: CalculDetailleComponent;
  let fixture: ComponentFixture<CalculDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
