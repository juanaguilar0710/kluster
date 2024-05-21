import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbuildappComponent } from './newbuildapp.component';

describe('NewbuildappComponent', () => {
  let component: NewbuildappComponent;
  let fixture: ComponentFixture<NewbuildappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbuildappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbuildappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
