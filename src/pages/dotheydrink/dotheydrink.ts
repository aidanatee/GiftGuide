import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AretheymalefemalePage} from "../aretheymalefemale/aretheymalefemale";
import {AlcoholicgiftboxPage} from "../alcoholicgiftbox/alcoholicgiftbox";
/*
  Generated class for the Dotheydrink page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dotheydrink',
  templateUrl: 'dotheydrink.html'
})
export class DotheydrinkPage {
  button1:any;
  button2:any;
  constructor(public navCtrl: NavController) {
   this.button1 = AlcoholicgiftboxPage;
   this.button2 = AretheymalefemalePage;

  }

  ionViewDidLoad() {
    console.log('Hello DotheydrinkPage Page');
  }

}
