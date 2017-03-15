import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GardengiftPage} from "../gardengift/gardengift";
import {OutdoorgadgetPage} from "../outdoorgadget/outdoorgadget";

/*
  Generated class for the Outthedoor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-outthedoor',
  templateUrl: 'outthedoor.html'
})
export class OutthedoorPage {
  button1:any;
  button2:any;

  constructor(public navCtrl: NavController) {
    this.button1 = GardengiftPage;
    this.button2 = OutdoorgadgetPage;
  }

  ionViewDidLoad() {
    console.log('Hello OutthedoorPage Page');
  }

}
