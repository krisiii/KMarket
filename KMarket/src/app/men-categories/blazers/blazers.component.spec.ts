import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazersComponent } from './blazers.component';

describe('BlazersComponent', () => {
  let component: BlazersComponent;
  let fixture: ComponentFixture<BlazersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlazersComponent]
    });
    fixture = TestBed.createComponent(BlazersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
