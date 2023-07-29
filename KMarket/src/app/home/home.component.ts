import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      console.log('my products: ', res);
      
    })
  }
  ngAfterViewInit(): void {
    
  }

  
}
