import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-blazers',
  templateUrl: './blazers.component.html',
  styleUrls: ['./blazers.component.css']
})
export class BlazersComponent {
  products: Observable<any[]>;

  constructor(
    private productsService: ProductService,
    private fireAuth: AngularFireAuth
  ) {}

  isLoggedIn = false;

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsService.getProducts().subscribe((res) => {
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
