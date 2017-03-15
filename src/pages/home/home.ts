import { Component } from '@angular/core';
import { Whoisitfor } from '../whoisitfor/whoisitfor';
import { NavController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {


  constructor(public navCtrl: NavController) {

  }
  navigate(){ this.navCtrl.push(Whoisitfor,{ firstPassed: "value 1", secondPassed: "value 2" }); }



  instagramShare(){
    SocialSharing.shareViaInstagram('Just ignore', 'https://www.google.nl/images/srpr/logo4w.png' )
      .then((successCode) => {
        console.log('success',successCode);
        alert('success');
      })
      .catch((errorCode) => {
        console.log('error', errorCode);
        alert('error');
      });
  }
  whatsappShare(){
//    SocialSharing.shareViaWhatsApp('Find your perfect gift with GiftGuide!', 'https://www.google.nl/images/srpr/logo4w.png', null);
    SocialSharing.shareViaWhatsApp('Find your perfect gift with GiftGuide!', 'https://www.google.nl/images/srpr/logo4w.png', null)
      .then((successCode) => {
        console.log('success',successCode);
        alert('success');
      })
      .catch((errorCode) => {
        console.log('error', errorCode);
        alert('error');
      });







  }

}


