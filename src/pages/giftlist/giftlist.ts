import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
  Generated class for the Giftlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-giftlist',
  templateUrl: 'giftlist.html'
})
export class GiftlistPage {
  myForm:any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({ field1: [''],
      field2: [''],
      field3: ['']
    });
  }

  ionViewDidLoad() {
    console.log('Hello GiftlistPage Page');
  }
  saveForm(event){ event.preventDefault(); console.log(this.myForm.value);
  }


}
