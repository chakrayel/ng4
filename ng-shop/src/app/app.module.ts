import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shared/services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent, ProductTileComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdGridListModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
