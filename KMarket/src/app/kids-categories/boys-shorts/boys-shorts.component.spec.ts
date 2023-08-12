import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysShortsComponent } from './boys-shorts.component';

describe('BoysShortsComponent', () => {
  let component: BoysShortsComponent;
  let fixture: ComponentFixture<BoysShortsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoysShortsComponent]
    });
    fixture = TestBed.createComponent(BoysShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
