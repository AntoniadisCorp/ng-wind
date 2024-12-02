import { TestBed } from '@angular/core/testing';
import { RippleDirective } from './ripple.directive';
import { RippleComponent } from '../test/ripple/ripple.component';

describe('RippleDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippleComponent, RippleDirective]

    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RippleComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});