import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Howdotheyspendtheirweekends} from "../howdotheyspendtheirweekends/howdotheyspendtheirweekends";
import {WhatsthebudgetPage} from "../whatsthebudget/whatsthebudget";

/*
  Generated class for the Isitpartfriend page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-isitpartfriend',
  templateUrl: 'isitpartfriend.html'
})
export class Isitpartfriend {
  pushPage2:any;
  pushPage1:any;

  constructor(public navCtrl: NavController) {
    this.pushPage2 = Howdotheyspendtheirweekends;
    this.pushPage1 = WhatsthebudgetPage;
  }

  ionViewDidLoad() {
    console.log('Hello IsitpartfriendPage Page');
  }

}

