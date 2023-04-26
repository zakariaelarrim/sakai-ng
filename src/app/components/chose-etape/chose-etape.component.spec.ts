import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseEtapeComponent } from './chose-etape.component';

describe('ChoseEtapeComponent', () => {
  let component: ChoseEtapeComponent;
  let fixture: ComponentFixture<ChoseEtapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseEtapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
