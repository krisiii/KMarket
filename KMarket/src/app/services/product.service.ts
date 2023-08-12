import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root',
})
export class ProductService {

  productsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.productsCollection = this.afs.collection('products');
  }

  getProducts(){
    return this.productsCollection.valueChanges({idField:'itemID'});
  }

}
