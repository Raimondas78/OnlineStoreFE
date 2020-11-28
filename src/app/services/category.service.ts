import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private baseUrl = environment.apiUrl;
  category: Category[] = [];

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + '/categories');
  }

  getAllSubcategoriesByCategory(id: number): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + '/categories/' + id);
  }

}

