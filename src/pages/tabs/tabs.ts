import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Home } from '../home/home';
import {GiftlistPage} from "../giftlist/giftlist";
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Home;
  tab2Root: any = GiftlistPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}




