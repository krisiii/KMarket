import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  products: Observable<any[]>

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(res=>{
      let products = JSON.stringify(res);
      localStorage.setItem('products', products);
    })
    
  }
  ngAfterViewInit(): void {
    
  }

  

  // try(){
  //   localStorage.setItem()
  // }

  
}
