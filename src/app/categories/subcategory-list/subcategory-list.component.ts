import {Component, Input, OnInit} from '@angular/core';
import {ParentCategory} from '../../interfaces/parent-category';
import {Category} from '../../interfaces/category';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit {
  @Input()subcategories: Category [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

  }
}
