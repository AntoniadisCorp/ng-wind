import { NgModule } from '@angular/core';
import { RippleDirective } from './ripple.directive';

@NgModule({
  imports: [RippleDirective],
  exports: [RippleDirective],
})
export class RippleModule { }