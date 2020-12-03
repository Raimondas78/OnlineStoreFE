import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SubcategoryComponent } from './categories/subcategory/subcategory.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SubcategoryListComponent } from './categories/subcategory-list/subcategory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    HeaderComponent,
    SubcategoryComponent,
    CategoryComponent,
    CategoriesComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    SubcategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
