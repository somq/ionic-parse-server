import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Parse
import { Parse } from 'parse';

// Constants
import { ENV } from '../../app/app.constant';

export class User {
  public id: string;
  public name: string;
  public email: string;
}

@Injectable()
export class AuthProvider {
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
<<<<<<< HEAD
  private masterKey : string = ENV.masterKey;
=======
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab

  constructor() {
    this.parseInitialize();
    console.log('Initiated Auth');
  }

  public signin(username: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      Parse.User.logIn(username, password, {
        success: function (user) {
          observer.next(true);
          observer.complete();
        },
        error: function (user, error) {
          // If the user inputs the email instead of the username
          var userQuery = new Parse.Query(Parse.User);
<<<<<<< HEAD
          new Parse.
=======
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab

          userQuery.equalTo('email', username);
          userQuery.first().then(function (success) {
            var username = success.toJSON().username; 
            Parse.User.logIn(username, password, {
              success: function (user) {
                observer.next(true);
                observer.complete();
              },
              error: function (user, error) {
                observer.error(error);
                observer.complete();
              }
            });
          }, function (error) {
            observer.error(error);
            observer.complete();
          });
          
        }
      });
    });
  }

<<<<<<< HEAD
  // public signup(username: string, password: string, email: string) {
  //   var user = new Parse.User();
  //   user.set('username', username);
  //   user.set('password', password);
  //   user.set('email', email);

  //   user.signUp(null, {
  //     success: (user) => {
  //       console.log(`user: `, user);
  //     },
  //     error: (user, error) => {
  //       console.log(`user, error: `, user, error);
  //     }
  //   });
  // }
=======
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
  public signup(username: string, password: string, email: string): Observable<boolean> {
    return new Observable((observer) => {
      var user = new Parse.User();
      user.set('username', username);
      user.set('password', password);
      user.set('email', email);

      user.signUp(null, {
        success: (user) => {
<<<<<<< HEAD
          console.log(`user: `, user);
=======
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
          observer.next(true);
          observer.complete();
        },
        error: (user, error) => {
<<<<<<< HEAD
          console.log(`user, error: `, user, error);
=======
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
          observer.error(error);
          observer.complete();
        }
      });

    });
  }

  public signout(): Observable<boolean> {
    return new Observable((observer) => {
      Parse.User.logOut().then(() => observer.next(true));
    });
  }

  public currentUser(): User {
    let u = Parse.User.current();
    if (u) {
      var user = new User();
      user.id = u.id;
      user.name = u.get('username');
      user.email = u.get('email');
      return user;
    }
    return null
  }

  public authenticated(): boolean {
    return this.currentUser() !== null;
  }

  private parseInitialize() {
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
<<<<<<< HEAD
    Parse.masterKey  = this.masterKey;
=======
>>>>>>> 71b7dbcaa725db26294e11e4a691f9f493e7f1ab
  }

}
