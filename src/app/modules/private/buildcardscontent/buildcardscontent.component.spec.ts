import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildcardscontentComponent } from './buildcardscontent.component';

describe('BuildcardscontentComponent', () => {
  let component: BuildcardscontentComponent;
  let fixture: ComponentFixture<BuildcardscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildcardscontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildcardscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
