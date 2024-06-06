import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasecardselectedComponent } from './basecardselected.component';

describe('BasecardselectedComponent', () => {
  let component: BasecardselectedComponent;
  let fixture: ComponentFixture<BasecardselectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasecardselectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasecardselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
