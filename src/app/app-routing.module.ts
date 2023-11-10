import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
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
    path: 'second-page',
    children: [
      {
        path: '',
        loadChildren: () => import('./second-page/second-page.module').then( m => m.SecondPagePageModule)
      },
      {
        path: ':contactId',
        loadChildren: () => import('./second-page/second-page.module').then( m => m.SecondPagePageModule)
      }
    ]

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
