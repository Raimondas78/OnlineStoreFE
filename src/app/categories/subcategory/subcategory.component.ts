import {Component, Input, OnInit} from '@angular/core';
import {ParentCategory} from '../../interfaces/parent-category';
import {Category} from '../../interfaces/category';
import {CategoryService} from '../../services/category.service';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  @Input() subcategory: Category;
  constructor() {
  }

  ngOnInit(): void {}

  // onSelected(id): void {
  //   this.getSubcategoryList(id);
  // }
  // getSubcategoryList(id): void{
  //   this.categoryService.getAllSubcategoriesByCategory(id).subscribe(subcategories => this.subcategories = subcategories);
  // }
}


