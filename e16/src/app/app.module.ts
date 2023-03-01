import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { PersonComponent } from './person/person.component';
import { OpeningCrawlComponent } from './opening-crawl/opening-crawl.component';
import {HttpClientModule} from "@angular/common/http";
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    PersonComponent,
    OpeningCrawlComponent,
    ServiceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
