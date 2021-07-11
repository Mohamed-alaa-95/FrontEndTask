import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './Components/Action/action.component';
import { AngularMaterialModule } from '../AngularMaterialModule/material.module';
@NgModule({
  declarations: [ActionComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ActionComponent],
})
export class SharedModule {}
