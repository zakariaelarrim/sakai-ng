import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionServirCollecteurComponent } from './question-servir-collecteur.component';

describe('QuestionServirCollecteurComponent', () => {
  let component: QuestionServirCollecteurComponent;
  let fixture: ComponentFixture<QuestionServirCollecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionServirCollecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionServirCollecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
