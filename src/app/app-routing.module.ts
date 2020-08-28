import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';


//Routes for navigation, only 2 for now, Dashboard and Posts Component.
const routes: Routes = [{
  path: '',
  component : DefaultComponent,
  children:[{
    path:'',
    component: DashboardComponent
  },{
    path:'posts',
    component : PostsComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
