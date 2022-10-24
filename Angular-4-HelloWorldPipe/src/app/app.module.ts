import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { GreetingPipe } from './greeting.pipe';

@NgModule({
    declarations: [
        AppComponent,
        GreetingPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    exports: [
        GreetingPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
