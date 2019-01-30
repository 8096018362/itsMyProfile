import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { appService } from '../../app/app.service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userObj: any = {};

  constructor(
    public _appService: appService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister() {
    this._appService.register(this.userObj).subscribe((data) => {
      console.log(data)
    })
  }

}
