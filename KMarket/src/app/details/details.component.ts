import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  products: Product | undefined;
  object: Promise<Product | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    public db: AngularFireDatabase,
    public fireAuth: AngularFireAuth,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let itemID = this.activatedRoute.snapshot.params['itemID'];
    console.log(itemID);
    this.object = this.afs
      .collection('products')
      .doc(itemID)
      .ref.get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();

          let product: any = { data };

          // console.log(mitCommaValues);

          const itemID = product.data.itemID;
          const itemName = product.data.itemName;
          const itemPrice = product.data.itemPrice;
          const itemSize = product.data.itemSize;
          const itemCategory = product.data.itemCategory;
          const itemGender = product.data.itemGender;
          const itemType = product.data.itemType;
          const itemImage = product.data.itemImage;
          const description = product.data.description;

          let object = {
            itemID: itemID,
            itemName: itemName,
            itemPrice: itemPrice,
            itemCategory: itemCategory,
            itemSize: itemSize,
            itemType: itemType,
            itemGender: itemGender,
            itemImage: itemImage,
            description: description,
          };
          console.log(object);

          return object;
        }
        return null;
      });
  }
  addToCart(p: any) {
    this.cartService.cartAdd(p);
    window.alert('Added to cart successfully!')
  }
}
