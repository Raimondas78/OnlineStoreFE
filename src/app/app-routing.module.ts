import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from './categories/category-list/category-list.component';
import {SubcategoryComponent} from './categories/subcategory/subcategory.component';
import {CategoriesComponent} from './categories/categories.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
