import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication-page',
    pathMatch: 'full'
  },
  {
    path: 'authentication-page',
    loadChildren: () => import('./authentication-page/authentication-page.module').then( m => m.AuthenticationPagePageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'second-page/:contactId',
    loadChildren: () => import('./second-page/second-page.module').then( m => m.SecondPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
