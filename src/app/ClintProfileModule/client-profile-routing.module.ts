import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Pages/Profile/profile.component';
const clientProfile: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(clientProfile)],
  exports: [RouterModule],
})
export class clientProfileRouting {}
