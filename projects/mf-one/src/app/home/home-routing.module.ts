import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {TwoComponent} from "./two/two.component";

const routes: Routes = [{path: '', component: HomeComponent,children:[
    {path: 'two', component: TwoComponent}
  ]}, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
