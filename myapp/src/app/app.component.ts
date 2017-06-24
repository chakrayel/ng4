import { Component } from '@angular/core';
import {ItemDataService} from './item/item-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string = 'Angular4 proof-of-concept';
   titleClass:boolean = true;
 // ensure Object property names are in single quote
   titleClasses: object = {
      'title-h4': true,
      'title-large-h4': true
  }
   titleStyle:string = null;
   titleStyles: object = {
    'background' : 'red'
  }

   _age: number = 0;
   isTrue: boolean = true;
   obj = {
    name: 'Chakra', age: 32
  }

   newItem: string = "Enter an item";
   items: Array<string> = ["Item1","Item2"];
   numbersArray: Array<number> = [1,2,10,6,4,8];
  // even though declared as private, they are still visible in the template!
  // Note - tbis is only in ng serve modifier
  // ng build --prod, typescript compiler complains about private variables not being accessible from template
   words: Array<string> = [];

  constructor(private itemDataService: ItemDataService) {
     // assigning this.words to getter method, notice there is no use of parens this.itemDataService.words
     // Also note private methods and instance variables are not visible in AppComponent
     this.words = this.itemDataService.words;
  }

   public ngOnInit() : void {
     console.log("AppComponent ngOnInit");
   }
  pushItem(newItem: string): void {
    if (this.newItem != "") this.items.push(newItem);
  }

  private  removeItem(ind: number): void {
    this.items.splice(ind, 1);
  }

  get age() : number {
    console.log("this.obj.age:"+this.obj.age);
    return this.obj.age;
  }

  set age(value :number) {
    this.obj.age = value;
  }

  getMyAge(){
    return this.obj.age;
  }
  setMyAge(value :number){
     this.obj.age = value;
  }
}
