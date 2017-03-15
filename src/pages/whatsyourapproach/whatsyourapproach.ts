import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TicketsPage} from "../tickets/tickets";
import {DotheydrinkPage} from "../dotheydrink/dotheydrink";

/*
  Generated class for the Whatsyourapproach page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-whatsyourapproach',
  templateUrl: 'whatsyourapproach.html'
})
export class WhatsyourapproachPage {
  button1:any;
  button2:any;

  constructor(public navCtrl: NavController) {
    this.button1 = TicketsPage;
    this.button2 = DotheydrinkPage;
  }

  ionViewDidLoad() {
    console.log('Hello WhatsyourapproachPage Page');
  }

}
