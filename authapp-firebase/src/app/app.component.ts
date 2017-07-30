import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { AngularFireDatabase, FirebaseListObservable, FirebaseListFactory } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
let nextId = 0;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

// Don't fetch data in a component constructor.
//You shouldn't worry that a new component will try to contact a remote server when created under test
// or before you decide to display it. Constructors should do no more than
// set the initial local variables to simple values.
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {

  }

  ngOnInit() {
    console.log("===Start of ngOnInit===");
    this.items = this.af.list('/messages', {
            query:  {
        limitToLast: 50
      }
    });
    nextId++;
    this.user = this.afAuth.authState;
    //this.af.app.delete();
    let localVar = "Hello";
    this.items.subscribe(snapshots => {
    snapshots.forEach(snapshot => {
      console.log(`$key: ${snapshot.$key} ${localVar} ${nextId}`)
      console.log(`$values: ${snapshot.message} ${snapshot.prop1}`)
    });
  });

  // Notice that this.someFunc(arrowFunc) executed in sequence and then "End of ngOnInit"
  let arrowFunc = (param1: string, param2: string) => {
    console.log(`arrowFunc executed ${nextId} ${this.title} ${param1} ${param2}`);
  };

  // Notice that anon/arrowFunc/closure in setTimeout got executed after "End of ngOnInit"
  // even though setTimeout's param is 0 milliseconds
  // This means async functions such as setTimeout() can be passed anon/arrowFunc/closure (with accessible surrounding variables)
  // then those anon/arrowFuncs/closures get executed in their own sweet time!
  // This means the thread of execution continues to next statement while async function executes closure at a later time
  // because the closure executes at a later time, it is like deferred execution and a chance to execute pieces of code at a later time, while the statement down below might have already been executed!!!
  setTimeout(()=> {
    console.log(`execting timeout ${localVar}`);
    //this.someFunc(arrowFunc);
    arrowFunc("from", "setTimeout");

  },0);

  this.someFunc(arrowFunc);

  console.log("===End of ngOnInit===");
  }

  private someFunc(fn: (str1:string, str2:string)=> void) {
    fn("param1","param2");
  }

  login() {
      this.afAuth.auth.signInAnonymously();
      this.ngOnInit();
  }

  logout() {
      this.afAuth.auth.signOut();
      this.items = null;
  }

  Send(desc: string) {
      this.items.push({ message: desc, prop1: "Hello "+desc});
      this.msgVal = '';
  }

  Remove($key: string){
    //this.items.remove({ message: desc})
    this.items.remove($key);

  }
}
