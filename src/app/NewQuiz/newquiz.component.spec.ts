import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuizComponent } from './newquiz.component';

describe('QuestionComponent', () => {
  let component: NewQuizComponent;
  let fixture: ComponentFixture<NewQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
