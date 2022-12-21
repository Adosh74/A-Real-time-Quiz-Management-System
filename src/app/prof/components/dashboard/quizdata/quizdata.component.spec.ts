import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizdataComponent } from './quizdata.component';

describe('QuizdataComponent', () => {
  let component: QuizdataComponent;
  let fixture: ComponentFixture<QuizdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
