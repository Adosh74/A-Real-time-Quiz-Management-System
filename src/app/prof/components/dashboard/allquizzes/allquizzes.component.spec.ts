import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquizzesComponent } from './allquizzes.component';

describe('AllquizzesComponent', () => {
  let component: AllquizzesComponent;
  let fixture: ComponentFixture<AllquizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllquizzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
