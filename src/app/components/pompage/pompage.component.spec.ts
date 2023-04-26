import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompageComponent } from './pompage.component';

describe('PompageComponent', () => {
  let component: PompageComponent;
  let fixture: ComponentFixture<PompageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PompageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
