import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomefragnancePage} from "../homefragnance/homefragnance";
import {GroomingkitPage} from "../groomingkit/groomingkit";

/*
  Generated class for the Aretheymalefemale page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aretheymalefemale',
  templateUrl: 'aretheymalefemale.html'
})
export class AretheymalefemalePage {
  button2:any;
  button1:any;

  constructor(public navCtrl: NavController) {
    this.button1 = GroomingkitPage;
    this.button2 = HomefragnancePage;
  }

  ionViewDidLoad() {
    console.log('Hello AretheymalefemalePage Page');
  }

}
