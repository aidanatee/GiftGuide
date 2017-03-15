import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FitnessgiftPage} from "../fitnessgift/fitnessgift";
import {PetPage} from "../pet/pet";
/*
  Generated class for the Hungover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hungover',
  templateUrl: 'hungover.html'
})
export class HungoverPage {
  pushPageYes:any;
  pushPageNo:any;

  constructor(public navCtrl: NavController) {
    this.pushPageYes = FitnessgiftPage;
    this.pushPageNo = PetPage;

  }

  ionViewDidLoad() {
    console.log('Hello HungoverPage Page');
  }

}
