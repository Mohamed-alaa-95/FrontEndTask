import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './Components/AdminLayout/adminLayout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { AngularMaterialModule } from '../AngularMaterialModule/material.module';
import { SharedModule } from '../SheardModule/shared.module';
import { ToolbarComponent } from './Components/Toolbar/toolbar.component';
import { AdminLayoutModel } from './Components/AdminLayout/adminLayoutModel';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    LayoutRoutingModule,
  ],
  declarations: [AdminLayoutComponent, ToolbarComponent],

  exports: [AdminLayoutComponent],
  providers: [AdminLayoutModel],
})
export class LayoutModule {}
