import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  products: Observable<any[]>;

  constructor(
    private productService: ProductService,
    private fireAuth: AngularFireAuth
  ) {}

  isLoggedIn = false;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe((res) => {
      console.log(res);
      

      this.fireAuth.authState.subscribe((user) => {
        if (user) {
          this.isLoggedIn = true;
        }
        console.log(this.isLoggedIn);
      });
    });
  }
  ngAfterViewInit(): void {}

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
    
  }
}
