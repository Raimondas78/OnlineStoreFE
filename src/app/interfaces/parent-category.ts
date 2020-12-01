import {Category} from './category';

export interface ParentCategory {
  id: number;
  name: string;
  subcategoryList: Category[];
}
