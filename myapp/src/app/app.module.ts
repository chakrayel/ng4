import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { MyComp2Component } from './my-comp2/my-comp2.component';
import { NestedComponent } from './my-comp/nested/nested.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { LogdirectiveDirective } from './logdirective.directive';
import { SortPipePipe } from './sort-pipe.pipe';
import { ItemDataService } from './item/item-data.service';

const routes: Routes = [
  // redirectTo you are saying render member route by default
  // memeber component is dispalyed immediately in the <router-outlet> on page load
  //{path: '',  redirectTo: 'member',  pathMatch: 'full'},
  {path: 'member',        component: MemberComponent},
  {path: 'product', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyComp2Component,
    NestedComponent,
    ProductComponent,
    MemberComponent,
    LogdirectiveDirective,
    SortPipePipe
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [ItemDataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
