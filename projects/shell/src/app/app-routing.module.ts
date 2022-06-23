import {loadRemoteModule} from '@angular-architects/module-federation';
import {startsWith, WebComponentWrapper, WebComponentWrapperOptions} from '@angular-architects/module-federation-tools';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppModule} from './app.module';

const routes: Routes = [
  {path: '', loadChildren: () => import('./page/page.module').then(m => m.PageModule)},
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
  // 组件
  {
    path: 'four',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      exposedModule: './web-component',
      elementName: 'angular1-element1'
    } as WebComponentWrapperOptions
  },
  // 组件的子路由
  // {
  //   matcher: startsWith('angular3'),
  //   component: WebComponentWrapper,
  //   data: {
  //     remoteEntry: 'http://localhost:4204/remoteEntry.js',
  //     remoteName: 'angular3',
  //     exposedModule: './web-components',
  //     elementName: 'angular3-element'
  //   } as WebComponentWrapperOptions
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
