import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Howdotheyspendtheirweekends} from "../howdotheyspendtheirweekends/howdotheyspendtheirweekends";
import {WhatsyourapproachPage} from "../whatsyourapproach/whatsyourapproach";


/*
  Generated class for the Howlonghaveyoubeen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-howlonghaveyoubeen',
  templateUrl: 'howlonghaveyoubeen.html'
})
export class Howlonghaveyoubeen {
  pushPage:any;
  pushPage2:any;
  constructor(public navCtrl: NavController) {
    this.pushPage = Howdotheyspendtheirweekends;
    this.pushPage2 = WhatsyourapproachPage;
  }

  ionViewDidLoad() {
    console.log('Hello HowlonghaveyoubeenPage Page');
  }

}

