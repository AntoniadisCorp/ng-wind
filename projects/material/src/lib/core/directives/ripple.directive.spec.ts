import { TestBed } from '@angular/core/testing';
import { RippleDirective } from './ripple.directive';

describe('RippleDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    TestBed.createComponent(RippleDirective);
  });

  it('should create', () => {
    const directive = TestBed.createComponent(RippleDirective);
    expect(directive).toBeTruthy();
  });
});