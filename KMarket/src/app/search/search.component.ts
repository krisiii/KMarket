import { Component } from '@angular/core';
import { AfterViewInit, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  enteredSearchValue: string = '';
  products: Observable<any[]>;

  constructor(
    private productsService: ProductService,
    private fireAuth: AngularFireAuth
  ) {}
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsService.getProducts().subscribe((res) => {
    });
  }

  @Output()
  // searchTextChanged: <string> = new EventEmitter<string>();
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
