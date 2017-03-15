import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Home } from "../home/home";
/*
  Generated class for the Coffeetablebook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coffeetablebook',
  templateUrl: 'coffeetablebook.html'
})
export class Coffeetablebook {
  mainbutton: any;

  constructor(public navCtrl: NavController) {
    this.mainbutton = Home;
  }

  ionViewDidLoad() {
    console.log('Hello CoffeetablebookPage Page');
  }

}
