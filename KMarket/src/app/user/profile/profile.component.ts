import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

//   firebase.auth().onAuthStateChanged(user => {<br>  if(user) {
//     console.log(user.uid)<br>    console.log(user.email)<br>   }
// })

constructor(public afs: AngularFireAuth){
}
ngOnInit(): void {
  this.afs.authState.subscribe((user)=>{
    console.log(user);
  })
}

}
