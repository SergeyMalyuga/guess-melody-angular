import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundUrlComponent } from './not-found-url.component';

describe('NotFoundUrlComponent', () => {
  let component: NotFoundUrlComponent;
  let fixture: ComponentFixture<NotFoundUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
