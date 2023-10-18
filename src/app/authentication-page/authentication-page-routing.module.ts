import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationPagePage } from './authentication-page.page';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationPagePageRoutingModule {}
