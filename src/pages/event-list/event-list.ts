import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
/**
 * Generated class for the EventListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, afDB : AngularFireDatabase) {
    this.items = afDB.list('/events');
    console.log(this.items);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

}
