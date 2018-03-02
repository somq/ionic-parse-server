<<<<<<< HEAD
import { ParseProvider } from './../../providers/parse/parse';
=======
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

// Providers
<<<<<<< HEAD
=======
import { ParseProvider } from '../../providers/parse/parse';
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newScore = { playerName: null, score: null };
  gameScores = [];

  constructor(private parseProvider: ParseProvider, private auth: AuthProvider, private navCtrl: NavController, private app: App) {
    this.listScores();
  }

  ionViewCanEnter(): boolean {
    return this.auth.authenticated();
  }

  public listScores(): Promise<any> {
<<<<<<< HEAD
    this.parseProvider.gameScores$().subscribe(res => {
      console.log('$$$$$$$$', res)
    })
=======
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
    let offset = this.gameScores.length;
    let limit = 10;
    return this.parseProvider.getGameScores(offset, limit).then((result) => {
      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        this.gameScores.push(object);
      }
    }, (error) => {
      console.log(error);
    });
  }

  public postGameScore() {
    this.parseProvider.addGameScore(this.newScore).then((gameScore) => {
      this.gameScores.push(gameScore);
      this.newScore.playerName = null;
      this.newScore.score = null;
    }, (error) => {
      console.log(error);
      alert('Error adding score.');
    });
  }

  public signout() {
    this.auth.signout().subscribe(() => {
      this.app.getRootNav().setRoot(SigninPage);
    });
  }

}
