import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Howlonghaveyoubeen } from '../howlonghaveyoubeen/howlonghaveyoubeen';
import { Isitpartfriend } from '../isitpartfriend/isitpartfriend';
import { Isitpartwork } from '../isitpartwork/isitpartwork';
import { Howdotheyspendtheirweekends } from '../howdotheyspendtheirweekends/howdotheyspendtheirweekends';
/*
  Generated class for the Whoisitfor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-whoisitfor',
  templateUrl: 'whoisitfor.html'
})
export class Whoisitfor {
  public firstParam:any;
  public secondParam:any;
  pushPage:any;
  pushPage2:any;

  weekendbutton: any;


  constructor(public navCtrl: NavController, public params:NavParams) {
    this.pushPage = Howlonghaveyoubeen;
    this.pushPage2 = Isitpartfriend;

    this.weekendbutton = Howdotheyspendtheirweekends;
    this.secondParam = params.get("secondPassed");
  }

  navigate(){ this.navCtrl.push(Howlonghaveyoubeen,{  }); }

  ionViewDidLoad() {
    console.log('Hello Whoisitfor Page');
  }

}

//




