import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(public fireAuth: AngularFireAuth, private router: Router){}

  async logout(){
    return this.fireAuth.signOut().then(() => {
      this.router.navigate(['home'])
  })}

  isLoggedIn = false
  userData={};

  ngOnInit(): void {
    this.fireAuth.authState.subscribe((user)=>{
      if(user){
        this.isLoggedIn = true
      }
      console.log(this.isLoggedIn);
    })
  }

  
}
