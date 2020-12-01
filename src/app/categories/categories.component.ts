import { Component, OnInit } from '@angular/core';
import {ParentCategory} from '../interfaces/parent-category';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  selectedParentCategory: ParentCategory;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.parentCategorySelected.
      subscribe((parentCategory: ParentCategory) => {
      this.selectedParentCategory = parentCategory;
    });
  }

}
