import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    let itemID = this.activatedRoute.snapshot.params['itemID'];
    console.log(itemID);

    itemID &&
      this.productService.getProduct(itemID).subscribe((product) => {
        // this.product = product
        console.log(product);
      });
  }
}
