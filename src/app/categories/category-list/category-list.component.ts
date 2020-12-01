import { Component, OnInit } from '@angular/core';
import {Category} from '../../interfaces/category';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import {ParentCategory} from '../../interfaces/parent-category';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  parentCategories: ParentCategory[];
  category: Category;
  subcategories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void{
    this.categoryService.getAllCategories().subscribe(data => this.parentCategories = data);
  }
}
