import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAlimentationGravitaireComponent } from './question-alimentation-gravitaire.component';

describe('QuestionAlimentationGravitaireComponent', () => {
  let component: QuestionAlimentationGravitaireComponent;
  let fixture: ComponentFixture<QuestionAlimentationGravitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAlimentationGravitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAlimentationGravitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
