import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGenreComponent } from './question-genre.component';

describe('QuestionGenreComponent', () => {
  let component: QuestionGenreComponent;
  let fixture: ComponentFixture<QuestionGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionGenreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
