import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { OurServiceComponent } from './our-service/our-service.component';

@NgModule({
  declarations: [
    AppComponent,
    DisclaimerComponent,
    HeadNavComponent,
    OurServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
