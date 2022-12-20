import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprofComponent } from './homeprof.component';

describe('HomeprofComponent', () => {
  let component: HomeprofComponent;
  let fixture: ComponentFixture<HomeprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
