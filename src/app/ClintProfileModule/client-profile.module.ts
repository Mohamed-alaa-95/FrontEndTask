import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../AngularMaterialModule/material.module';
import { SharedModule } from '../SheardModule/shared.module';
import { clientProfileRouting } from './client-profile-routing.module';
import { ProfileComponent } from './Pages/Profile/profile.component';
import { ProfileListComponent } from './Components/ProfileList/profileList.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    clientProfileRouting,
  ],
  declarations: [ProfileComponent, ProfileListComponent],
  exports: [],
})
export class ClientProfileModule {}
