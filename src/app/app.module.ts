import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsDetailsComponent } from './skills-details/skills-details.component';
import { WorkExpDetailsComponent } from './work-exp-details/work-exp-details.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    SkillsDetailsComponent,
    WorkExpDetailsComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
