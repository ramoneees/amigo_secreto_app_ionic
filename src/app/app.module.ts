import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFireModule  } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

export const firebaseConfig = { 
    apiKey: "AIzaSyCFSvXeChyMwWc1H5t-tP1gXfxU2XNdahc",
    authDomain: "amigo-secreto-app-59853.firebaseapp.com",
    databaseURL: "https://amigo-secreto-app-59853.firebaseio.com",
    projectId: "amigo-secreto-app-59853",
    storageBucket: "amigo-secreto-app-59853.appspot.com",
    messagingSenderId: "779067427199"
};

//Facebook Id: 396952293973555
//Facebook App Secret: 1e4e8ed89ef1622e6a34998f8b8d5c33


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
