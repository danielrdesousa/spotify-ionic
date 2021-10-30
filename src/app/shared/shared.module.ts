import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageFadeDirective } from './directives/image-fade/image-fade.directive';


@NgModule({
  declarations: [
    ImageFadeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageFadeDirective
  ]
})
export class SharedModule { }
