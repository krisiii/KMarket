import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../products';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

// interface Product{
//   hasImage: string,
//   itemCategory: string,
//   itemName: string,
//   itemID: string,
//   itemPriceFull: number,
//   itemType: string,
// }

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  products: Product | undefined;
  object: Promise<Product|null>

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    public db: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    let itemID = this.activatedRoute.snapshot.params['itemID'];
    console.log(itemID);
    this.object = this.afs
      .collection('momos_v')
      .doc(itemID)
      .ref.get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();

          let product: any = { data };

          // console.log(mitCommaValues);

          const hasImage = product.data.hasImage;
          const itemCategory = product.data.itemCategory;
          const itemType = product.data.itemType;
          const itemID = product.data.itemID;
          const itemName = product.data.itemName;
          const itemPriceFull = product.data.itemPriceFull;

          let object = {
            hasImage: hasImage,
            itemName: itemName,
            itemPriceFull: itemPriceFull,
            itemCategory: itemCategory,
            itemID: itemID,
            itemType: itemType,
          };
          console.log(object);
          

          return object;

          // this.object = object;

          // console.log(object);

          // console.log(doc.data());
        }
        return null;
      });
  }
}
