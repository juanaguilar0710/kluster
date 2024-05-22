import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasecardlistComponent } from './basecardlist.component';

describe('BasecardlistComponent', () => {
  let component: BasecardlistComponent;
  let fixture: ComponentFixture<BasecardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasecardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasecardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
