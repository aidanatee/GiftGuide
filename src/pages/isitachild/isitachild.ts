import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DotheydrinkPage} from "../dotheydrink/dotheydrink";
import {TheyarePage} from "../theyare/theyare";

/*
  Generated class for the Isitachild page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-isitachild',
  templateUrl: 'isitachild.html'
})
export class IsitachildPage {
  pushPageYes:any;
  pushPageNo:any;

  constructor(public navCtrl: NavController) {
    this.pushPageNo = DotheydrinkPage;
    this.pushPageYes = TheyarePage;

  }

  ionViewDidLoad() {
    console.log('Hello IsitachildPage Page');
  }

}
