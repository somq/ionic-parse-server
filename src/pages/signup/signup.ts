import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  password: string = '';
  username: string = '';
  verify: string = '';
  email: string = '';

  constructor(public navCtrl: NavController, private authPvdr: AuthProvider, private loadCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('Initiate Signup');
  }

  // TODO: form validation
  public doRegister() {
    let loader = this.loadCtrl.create({
      content: 'Signing up...'
    });
    loader.present();

<<<<<<< HEAD
    this.authPvdr.signup(this.username, this.password, this.email)
    .subscribe((success) => {
=======
    this.authPvdr.signup(this.username, this.password, this.email).subscribe((success) => {
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
      this.navCtrl.setRoot(TabsPage);
      loader.dismissAll();
    }, (error) => {
      loader.dismissAll();
<<<<<<< HEAD
    })
=======
    });
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
  }

}
