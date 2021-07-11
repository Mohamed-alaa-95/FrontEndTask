import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './Components/AdminLayout/adminLayout.component';
import { ToolbarComponent } from './Components/Toolbar/toolbar.component';

const layoutRoutes: Routes = [
  {
    path: '',
    component: ToolbarComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('../ClintProfileModule/client-profile-routing.module').then(
            (mod) => mod.clientProfileRouting
          ),
      },

      {
        path: '',
        loadChildren: () =>
          import('../ClintProfileModule/client-profile-routing.module').then(
            (mod) => mod.clientProfileRouting
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
