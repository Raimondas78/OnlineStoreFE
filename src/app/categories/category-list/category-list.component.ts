import { Component, OnInit } from '@angular/core';
import {Category} from '../../interfaces/category';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  category: Category;
  subcategory: Category[] = [];
  constructor(private categoryService: CategoryService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void{
    this.categoryService.getAllCategories().subscribe(data => this.categories = data);
  }

  onClick(category: Category): void{
    this.getSubcategories(category);
  }
  getSubcategories(category: Category): void{
    this.categoryService.getAllSubcategoriesByCategory(category.id).subscribe(subcategory => this.subcategory = subcategory);
  }
   getSubcategoryList(id: number): void{
    this.categoryService.getAllSubcategoriesByCategory(id);
   }

}
