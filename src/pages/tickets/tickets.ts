import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Home} from "../home/home";

/*
  Generated class for the Tickets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {
  mainbutton:any;


  constructor(public navCtrl: NavController) {
    this.mainbutton = Home;

  }

  ionViewDidLoad() {
    console.log('Hello TicketsPage Page');
  }

}
