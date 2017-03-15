import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToyshooterPage} from "../toyshooter/toyshooter";
import {FrozenPage} from "../frozen/frozen";

/*
  Generated class for the Theyare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theyare',
  templateUrl: 'theyare.html'
})
export class TheyarePage {
  button2:any;
  button1:any;

  constructor(public navCtrl: NavController) {
    this.button1 = ToyshooterPage;
    this.button2 = FrozenPage;
  }

  ionViewDidLoad() {
    console.log('Hello TheyarePage Page');
  }

}
