import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitaireComponent } from './gravitaire.component';

describe('GravitaireComponent', () => {
  let component: GravitaireComponent;
  let fixture: ComponentFixture<GravitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GravitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GravitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
