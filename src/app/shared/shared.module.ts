import { DestruirDirective } from './directives/destruir.directive';
import { OcultarDirective } from './directives/ocultar.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OcultarDirective,
    DestruirDirective
  ],
  exports: [
    OcultarDirective,
    DestruirDirective
  ]
})
export class SharedModule { }
