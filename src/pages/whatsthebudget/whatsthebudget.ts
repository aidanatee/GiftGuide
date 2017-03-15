import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Howdotheyspendtheirweekends} from "../howdotheyspendtheirweekends/howdotheyspendtheirweekends";
import {NoveltygiftPage} from "../noveltygift/noveltygift";

/*
  Generated class for the Whatsthebudget page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-whatsthebudget',
  templateUrl: 'whatsthebudget.html'
})
export class WhatsthebudgetPage {
  pushPage1:any;
  pushPage2:any;

  constructor(public navCtrl: NavController) {
    this.pushPage1 = Howdotheyspendtheirweekends;
    this.pushPage2 = NoveltygiftPage;
  }

  ionViewDidLoad() {
    console.log('Hello WhatsthebudgetPage Page');
  }

}
