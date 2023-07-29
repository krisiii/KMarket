import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection('momos_v');
  }

  getProducts(){
    return this.productsCollection.valueChanges({idField:'id'});
  }
}
