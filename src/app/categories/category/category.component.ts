import { Component, OnInit } from '@angular/core';
import {Category} from '../../interfaces/category';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor( ) { }

  ngOnInit(): void {
  }
}
