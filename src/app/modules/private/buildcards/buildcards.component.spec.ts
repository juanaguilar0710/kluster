import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildcardsComponent } from './buildcards.component';

describe('BuildcardsComponent', () => {
  let component: BuildcardsComponent;
  let fixture: ComponentFixture<BuildcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
