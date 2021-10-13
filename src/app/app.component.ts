import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBubU9lAPMYW18c-BxSNXMSk_xKf5DHRhM',
  databaseURL: 'https://angularchat-4b198-default-rtdb.firebaseio.com',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
