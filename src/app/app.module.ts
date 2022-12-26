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
import { OurblogCardComponent } from './ourblog-card/ourblog-card.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { AwardCardComponent } from './award-card/award-card.component';
import { HelpadviceFooterComponent } from './helpadvice-footer/helpadvice-footer.component';
import { ServicesFooterComponent } from './services-footer/services-footer.component';
import { HiredevelopersFooterComponent } from './hiredevelopers-footer/hiredevelopers-footer.component';
import { InquiryFooterComponent } from './inquiry-footer/inquiry-footer.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    RatingCardComponent,
    AddressCardComponent,
    OurblogCardComponent,

    AwardCardComponent,
    HelpadviceFooterComponent,
    ServicesFooterComponent,
    HiredevelopersFooterComponent,
    InquiryFooterComponent,
    StarRatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
