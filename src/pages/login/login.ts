import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { appService } from '../../app/app.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _appService: appService
  ) {
  }

  loginObj: any = {};

  loginForm: FormGroup;

  ngOnInit(): void {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  doLogin() {
    this._appService.login(this.loginObj).subscribe(
      (data) => {
        console.log(data)
        
      }, (err) => {

      }
    )
  }

}
