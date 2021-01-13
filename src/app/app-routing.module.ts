import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { ResolutionListComponent } from './resolution/resolution-list/resolution-list.component';


const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'resolution/:id', component: ResolutionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
