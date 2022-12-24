import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { ExperienceDataComponent } from './experience-data/experience-data.component';
import { ExperienceDataleftComponent } from './experience-dataleft/experience-dataleft.component';
import { TechnologiesNameComponent } from './technologies-name/technologies-name.component';
import { TechnologyFrontendComponent } from './technology-frontend/technology-frontend.component';
import { TechnologySidebarComponent } from './technology-sidebar/technology-sidebar.component';
import { ExpertiseCardComponent } from './expertise-card/expertise-card.component';
import { RatingCardComponent } from './rating-card/rating-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DisclaimerComponent,
    HeadNavComponent,
    OurServiceComponent,
    ExperienceDataComponent,
    ExperienceDataleftComponent,
    TechnologiesNameComponent,
    TechnologyFrontendComponent,
    TechnologySidebarComponent,
    ExpertiseCardComponent,
    RatingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
