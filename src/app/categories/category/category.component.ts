import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../interfaces/category';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {switchMap} from 'rxjs/operators';
import {ParentCategory} from '../../interfaces/parent-category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() parentCategory: ParentCategory;
  subcategories: Category[];
  isActive = false;
  constructor(private categoryService: CategoryService ) { }

  ngOnInit(): void {
  }
  // onSelected(){
  //   this.categoryService.parentCategorySelected.emit(this.parentCategory);
  // }

  onSelected(id): void {
    this.getSubcategoryList(id);
    this.isActive = !this.isActive;
  }
  getSubcategoryList(id): void{
    this.categoryService.getAllSubcategoriesByCategory(id).subscribe(subcategories => this.subcategories = subcategories);
  }

}
