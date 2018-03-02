import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// Parse
import { Parse } from 'parse';

// Constants
import { ENV } from '../../app/app.constant';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ParseProvider {
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;

  constructor() {
    this.parseInitialize();
    console.log('Initiated Parse');


  }

  gameScores$() {
    // this.gameScores$ = new Subject();
    return new Observable(obs => {
      const gameScoreRef = Parse.Object.extend('GameScore');
      let query = new Parse.Query(gameScoreRef);
      let subscription = query.subscribe();
  
      subscription.on('create', gameScores => {
        console.log('New gameScore:', gameScores);
        let query = new Parse.Query(gameScoreRef);
        query.find().then((gameScores) => {
          obs.next(gameScores)
        }, (err) => {
          obs.next(err)
        });
      });
    })

  }
  public getGameScores(offset: number = 0, limit: number = 3): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const GameScore = Parse.Object.extend('GameScore');
        let query = new Parse.Query(GameScore);
        query.skip(offset);
        query.limit(limit);
        query.find().then((gameScores) => {
          resolve(gameScores);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }

  public addGameScore(newScore): Promise<any> {
    const GameScore = Parse.Object.extend('GameScore');
    
    let gameScore = new GameScore();
    gameScore.set('score', parseInt(newScore.score));
    gameScore.set('playerName', newScore.playerName);
    gameScore.set('cheatMode', false);

    return gameScore.save(null, {
      success: function (gameScore) {
        console.log(gameScore);
        return gameScore;
      },
      error: function (gameScore, error) {
        console.log(error);
        return error;
      }
    });
  }

  private parseInitialize() {
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
  }

}
