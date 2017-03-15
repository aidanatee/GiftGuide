import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Christmashamper } from "../christmashamper/christmashamper";
import { Coffeetablebook } from "../coffeetablebook/coffeetablebook";
import { IsitapresentforababyPage } from "../isitapresentforababy/isitapresentforababy";
import {OutthedoorPage} from "../outthedoor/outthedoor";

/*
  Generated class for the Howdotheyspendtheirweekends page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-howdotheyspendtheirweekends',
  templateUrl: 'howdotheyspendtheirweekends.html'
})
export class Howdotheyspendtheirweekends {
  notsurebutton: any;
  culturebutton: any;
  sleepingbutton:any;
  outdoorsbutton:any;


  constructor(public navCtrl: NavController) {
  this.notsurebutton = Christmashamper;
  this.culturebutton = Coffeetablebook;
  this.sleepingbutton = IsitapresentforababyPage;
  this.outdoorsbutton = OutthedoorPage;

}

  ionViewDidLoad() {
    console.log('Hello Howdotheyspendtheirweekends Page');
  }
}


//



