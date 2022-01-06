import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [
    ImgBrokenDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImgBrokenDirective
  ],
  providers:[
  ]
})
export class SharedModule { }
