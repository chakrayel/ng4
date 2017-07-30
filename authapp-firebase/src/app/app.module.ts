import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';

export const firebaseconfig = {
  apiKey: "AIzaSyAfULNZkm0GH8NRsxgDijvyNGzP3v6FFVo",
  authDomain: "myfirebase-a050d.firebaseapp.com",
  databaseURL: "https://myfirebase-a050d.firebaseio.com",
  projectId: "myfirebase-a050d",
  storageBucket: "",
  messagingSenderId: "414066049098"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
