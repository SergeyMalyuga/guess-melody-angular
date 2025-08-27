import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionArtistComponent } from './question-artist.component';

describe('QuestionArtistComponent', () => {
  let component: QuestionArtistComponent;
  let fixture: ComponentFixture<QuestionArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
