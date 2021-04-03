import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/Product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  products: any;
  sortOptions: Object = { //initialization
    'name': {'order': 'desc', 'active': false},
    'price': {'order': 'desc', 'active': false},
    'category': {'order': 'desc', 'active': false}
  }
  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.ProductService.getProducts().subscribe((res) => {
       this.products = res;
    });
  }

  sortBy(field){
    this.setSortOptions(field);
   
    if(this.sortOptions[field].order === 'desc'){
      this.sortOptions[field].order = 'asc'
      
      this.products.sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0))
    }else{
      this.sortOptions[field].order = 'desc'
      this.products.sort((a,b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0))
    }
  }

  getActiveClass(field){
    if(this.sortOptions[field].active){
      return 'active';
    }else{
      return 'inactive'
    }
  }

  setSortOptions(field){
   for(let option in this.sortOptions){
     if(option === field){
         this.sortOptions[option]['active'] = true;
     }
      else{ // resetting the options
         this.sortOptions[option]['active'] = false;
         this.sortOptions[option]['order'] = "desc";
     }
  }
  }

}
