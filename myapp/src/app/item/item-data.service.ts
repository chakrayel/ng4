import { Injectable, OnInit } from '@angular/core';

@Injectable()

// Angular does not call ItemDataService.ngOnInit() even though it implements OnInit!!!
export class ItemDataService implements OnInit{
 // nothing to inject into ItemDataService, so no params here
 // however you may want to include statements that needs to be executed one-time
 // like intializing an Observable and as well s calling subscribe() on it.
 // and intializing instance variables

 // note:- even though public modifier is not specified, it is visible in ohter comps unless explicitly declared private
 publicStr: string = "publicStr - I'm visible in other components"

 private wordsArr: Array<string> = [];

 private strArr: string[] = ["i'm","doing", "fine"];

  constructor() {

  }

  get words(): string[] {
    console.log("ItemDataService get words");
    this.ngOnInit();
    return this.wordsArr;
  }
 // is called only for @Directives/@Components not serivce components
 public ngOnInit() : void {
      console.log("ItemDataService ngOnInit");
   // the function push(...params) has a rest operator ...params
   // i:e caller of push can specify any number of params as in push(param1, param2, param3, and so on)
   // rest operator can turn a variable number of parameters into an array
   // if you put ... infornt of function argument it means it accepts any number of params separated by comas
   // inside push() function ...params turns into array[]
   this.wordsArr.push("hello","how", "are", "you");

   //the spread operator can do the opposite: turn an array into a list of arguments. ”
   // if you put ... infront of an arr[] variable it expands into coma searapated params arr[0],arr[1],arr[2] and so on
   this.wordsArr.push(...this.strArr);

   // the advantage of ... either in front of function param or in fornt of arr variable is that
    // push(...params) params becomes params[] inside push function
    //...[param1,param2,param3] expands into coma separated list so that caller of push() has choice to pack them together at one place
 }

}
