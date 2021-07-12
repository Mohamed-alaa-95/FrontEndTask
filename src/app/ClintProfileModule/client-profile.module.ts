import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../AngularMaterialModule/material.module';
import { SharedModule } from '../SheardModule/shared.module';
import { clientProfileRouting } from './client-profile-routing.module';
import { ProfileListComponent } from './Components/ProfileList/profileList.component';
import { ProfileComponent } from './Pages/Profile/profile.component';
@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    clientProfileRouting,
  ],
  declarations: [ProfileListComponent, ProfileComponent],
  exports: [],
})
export class ClientProfileModule {}
