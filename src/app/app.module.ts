import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { ExperienceDataComponent } from './experience-data/experience-data.component';
import { ExperienceDataleftComponent } from './experience-dataleft/experience-dataleft.component';

@NgModule({
  declarations: [
    AppComponent,
    DisclaimerComponent,
    HeadNavComponent,
    OurServiceComponent,
    ExperienceDataComponent,
    ExperienceDataleftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
