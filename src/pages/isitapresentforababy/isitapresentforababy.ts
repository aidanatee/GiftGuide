import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EducationaltoyPage} from "../educationaltoy/educationaltoy";
import {HungoverPage} from "../hungover/hungover";

/*
  Generated class for the Isitapresentforababy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-isitapresentforababy',
  templateUrl: 'isitapresentforababy.html'
})
export class IsitapresentforababyPage {
  pushPageYes:any;
  pushPageNo:any;

  constructor(public navCtrl: NavController) {
    this.pushPageNo = HungoverPage;
      this.pushPageYes = EducationaltoyPage;
  }

  ionViewDidLoad() {
    console.log('Hello IsitapresentforababyPage Page');
  }

}
