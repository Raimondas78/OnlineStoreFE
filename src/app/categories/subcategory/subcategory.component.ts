import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../interfaces/category';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  categories: Category[];
  currentCategoryId: number;
  id: number;
  constructor(private service: CategoryService, private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
      this.getSubcategories();
  }
  getSubcategories(): void {
    this.service.getAllSubcategoriesByCategory(3);
  }
}

