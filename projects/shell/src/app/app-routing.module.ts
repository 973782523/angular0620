import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppModule} from './app.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/page.module').then(m => m.PageModule) },
  {
    path: 'one',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mf-one',
        exposedModule: './HomeModule',
      }).then((m) => m.HomeModule),
  },
  {
    path: 'two',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mf-one',
        exposedModule: './HomeTwoModule',
      }).then((m) => m.HomeTwoModule),
  },
  {
    path: 'three',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mf-two',
        exposedModule: './TwoModule',
      }).then((m) => m.TwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
