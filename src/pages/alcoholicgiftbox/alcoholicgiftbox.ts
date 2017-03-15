import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Home} from "../home/home";
/*
  Generated class for the Alcoholicgiftbox page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alcoholicgiftbox',
  templateUrl: 'alcoholicgiftbox.html'
})
export class AlcoholicgiftboxPage {
  mainbutton:any;

  constructor(public navCtrl: NavController) {
    this.mainbutton = Home;
  }

  ionViewDidLoad() {
    console.log('Hello AlcoholicgiftboxPage Page');
  }

}
