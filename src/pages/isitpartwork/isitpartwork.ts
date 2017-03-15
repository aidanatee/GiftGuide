import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Isitpartwork page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-isitpartwork',
  templateUrl: 'isitpartwork.html'
})
export class Isitpartwork {

  pushPage3:any;

  constructor(public navCtrl: NavController) {
    this.pushPage3 = Isitpartwork;
  }

  ionViewDidLoad() {
    console.log('Hello Isitpartwork Page');
  }

}


/*
 Generated class for the Isitpartfriend page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


