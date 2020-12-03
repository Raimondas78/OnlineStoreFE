import {Injectable, Output, EventEmitter} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../interfaces/category';
import {ParentCategory} from '../interfaces/parent-category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  parentCategorySelected = new EventEmitter<ParentCategory>();
  subcategorySelected = new EventEmitter<Category>();

  private baseUrl = environment.apiUrl;
  parentCategories: ParentCategory[] = [];
  subcategories: Category[] = [];

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ParentCategory[]> {
    return this.http.get<ParentCategory[]>(this.baseUrl + '/categories');
  }

  getAllSubcategoriesByCategory(id: number): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + '/categories/' + id);
  }

}

