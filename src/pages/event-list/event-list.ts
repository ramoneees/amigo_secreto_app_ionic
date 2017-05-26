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
  staticItems;
  constructor(public navCtrl: NavController, afDB : AngularFireDatabase) {
    this.items = afDB.list('/events');
    console.log(this.items);
    let evento1 = new  Evento("test","evento1");
    let evento2 = new  Evento("test","evento2");
    let evento3 = new  Evento("test","evento3");

    this.staticItems = [evento1,evento2,evento3];

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

}


class Evento{
    picture: string;
    name: string;
    constructor(picture: string, name: string){
      this.name = name;
      this.picture = picture;
    }
}
