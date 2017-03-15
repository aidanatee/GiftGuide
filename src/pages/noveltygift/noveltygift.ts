import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Home} from "../home/home";
/*
  Generated class for the Noveltygift page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-noveltygift',
  templateUrl: 'noveltygift.html'
})
export class NoveltygiftPage {
  mainbutton:any;

  constructor(public navCtrl: NavController) {
    this.mainbutton = Home;
  }

  ionViewDidLoad() {
    console.log('Hello NoveltygiftPage Page');
  }

}
