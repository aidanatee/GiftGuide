import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Home} from "../home/home";
import { SocialSharing } from 'ionic-native';

/*
  Generated class for the Frozen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-frozen',
  templateUrl: 'frozen.html'
})
export class FrozenPage {
  mainbutton:any;

  constructor(public navCtrl: NavController) {
    this.mainbutton = Home;
  }

  ionViewDidLoad() {
    console.log('Hello FrozenPage Page');
  }
  instagramShare(){
    SocialSharing.shareViaInstagram("Testing, sharing this from inside an app I'm building right now", "https://pp.vk.me/c626822/v626822215/3f8cd/F_gIVvwMbqU.jpg" );
  }
  whatsappShare(){
    SocialSharing.shareViaWhatsApp("Testing, sharing this from inside an app I'm building right now", "http://thumbsnap.com/iAU4ZmCr", null);
  }

}
