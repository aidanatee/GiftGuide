import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Home} from "../home/home";
import { SocialSharing } from 'ionic-native';
/*
  Generated class for the Educationaltoy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-educationaltoy',
  templateUrl: 'educationaltoy.html'
})
export class EducationaltoyPage {
   mainbutton:any;
  constructor(public navCtrl: NavController) {
    this.mainbutton = Home;

  }

  ionViewDidLoad() {
    console.log('Hello EducationaltoyPage Page');
  }
  instagramShare(){
    SocialSharing.shareViaInstagram("Testing, sharing this from inside an app I'm building right now", "http://thumbsnap.com/zW6oAR5Z" );
  }
  whatsappShare(){
    SocialSharing.shareViaWhatsApp("Testing, sharing this from inside an app I'm building right now", null, null);
  }

}
