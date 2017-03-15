import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Home} from "../home/home";
/*
  Generated class for the Homefragnance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-homefragnance',
  templateUrl: 'homefragnance.html'
})
export class HomefragnancePage {
  mainbutton:any;

  constructor(public navCtrl: NavController) {
    this.mainbutton = Home;
  }

  ionViewDidLoad() {
    console.log('Hello HomefragnancePage Page');
  }

}
