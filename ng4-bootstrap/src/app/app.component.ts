import { Component, ViewChildren, QueryList } from '@angular/core';
import {NgbAlert, NgbTabChangeEvent, NgbTab} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  simpleAlert = true;

  @ViewChildren(NgbTab)
  ngbTabs: QueryList<NgbTab>;

  @ViewChildren(NgbAlert)
  ngbAlerts: QueryList<NgbAlert>;

  public closeAlert() {
  this.simpleAlert = false;
  console.log(`this.ngbAlerts.length: ${this.ngbAlerts.length}`);
  //this.ngbAlerts.first.type
  }
  // This handler displays Alert tag when Tab selected is "Simple"
  public openAlert($event: NgbTabChangeEvent) {
   console.log("In openAlert event handler");
   $event.preventDefault();
   let tabsWithId: NgbTab[] = this.ngbTabs.filter(tab => tab.id === $event.nextId);
   let title: string = tabsWithId.length ? tabsWithId[0].title : "NONE";
   if (title == "Simple") {
     console.log(`this.simpleAlert: ${this.simpleAlert}`);
     this.simpleAlert = true;
   }
  }
}
