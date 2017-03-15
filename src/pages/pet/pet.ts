import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PethamperPage} from "../pethamper/pethamper";
import {IsitachildPage} from "../isitachild/isitachild";

/*
  Generated class for the Pet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pet',
  templateUrl: 'pet.html'
})
export class PetPage {
  button1:any;
  button2:any;

  constructor(public navCtrl: NavController) {
    this.button2 = PethamperPage;
    this.button1 = IsitachildPage;
  }

  ionViewDidLoad() {
    console.log('Hello PetPage Page');
  }

}
