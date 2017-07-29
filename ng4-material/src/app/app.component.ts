import { Component, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { MdMenuTrigger, MdMenuItem } from '@angular/material';
import { JsonPhotoService } from './service/json-photo.service';
// You can specify providers:[JsonPhotoService] at @NgModule level, then that providers are used at @Component level
// if you want to override @NgModule level, then specify them at @Component level
// These options are useful for injecting mockServices and avoiding multiple changes at every component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  //providers:[JsonPhotoService]
})
export class AppComponent {
  title = 'app title';

  photos: Array<any>;

  @ViewChild(MdMenuTrigger)
  trigger: MdMenuTrigger;

  @ViewChildren(MdMenuItem)
  mdMenuItems: QueryList<MdMenuItem>;;

  menuItems:Array<MyMenuItem> = [];

  constructor(private jsonPhotoService: JsonPhotoService) {
//this.trigger.openMenu();
  }
  // child components are not available at this lifecyle hook.
  // Takeaway:- ngOnInit displays databound properties and intilializes input properties
  // but children are still not yet fecthed and assigned to trigger: MdMenuTrigger;
  // so eagerly looking to use @ViewChild elements in lifecycle ngOnInit() won't work
  // However once the view in rendered fully, from the template you can call @ViewChildEleRef.methods()
  templateMethodCall() {
    this.menuItems.push(new MyMenuItem("hello","hello desc"));
    this.mdMenuItems.map((item, i)=> {
    i==1? item.disabled=false:item
  });
    this.trigger.openMenu();
  }
 // my idea of openMenu on view display did not work with this lifecycle method
 // console three error that MdMenuTrigger.menu as undefined then I relaized after all
 // @ViewChildren elements aren't fecthed by Angular at ngOnInit() lifecycle hook.
 // Best practice call HTTP service in ngOnInit rather than in component's constructor
  ngOnInit() {
    this.jsonPhotoService.fetchPhotos()
    .subscribe((res: Array<any>) => {
      this.photos = res;
    });
    //  this.photos.forEach(elem => console.log(elem));
    //  console.log(this.photos);
  }
 //  it did worked with this method, i:e display menu on view initialization
  ngAfterViewInit() {
    this.trigger.openMenu();
  }

}
class MyMenuItem {

  constructor(public icon:string, public desc: string) {}
}
