import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : [AngularFireAuth]
})
export class LoginPage {

  displayName;


  constructor(public navCtrl: NavController, private afAuth : AngularFireAuth) {  
    afAuth.authState.subscribe(user => {
      if(!user){
        this.displayName = null;
        return;
      } else {
        this.displayName = user.displayName;
      }
    });
  }
  connectWithFacebook(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => console.log(res));
    
  }
  singOut(){
    this.afAuth.auth.signOut();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
