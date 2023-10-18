import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPagePageRoutingModule } from './authentication-page-routing.module';

import { AuthenticationPagePage } from './authentication-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationPagePageRoutingModule
  ],
  declarations: [AuthenticationPagePage]
})
export class AuthenticationPagePageModule {}
