import { Component, OnInit } from '@angular/core';
import {Category} from '../interfaces/category';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  category: Category;
  constructor() { }

  ngOnInit(): void {
  }


}
