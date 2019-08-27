import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ocr';

  constructor(){

    const firebaseConfig = {
      apiKey: "AIzaSyCxQa7116n1OguUHFc-gfi2Tmo-GkOjKZo",
      authDomain: "ocrblog.firebaseapp.com",
      databaseURL: "https://ocrblog.firebaseio.com",
      projectId: "ocrblog",
      storageBucket: "ocrblog.appspot.com",
      messagingSenderId: "981673464202",
      appId: "1:981673464202:web:5f6f32899fc1d002"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
}
