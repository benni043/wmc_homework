import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { E2HelloNameComponent } from './e2-hello-name/e2-hello-name.component';
import { E3FibonacciComponent } from './e3-fibonacci/e3-fibonacci.component';
import { E4F1Component } from './e4-f1/e4-f1.component';
import { E5HelloWorldPipeComponent } from './e5-hello-world-pipe/e5-hello-world-pipe.component';
import { E6StoppWatchComponent } from './e6-stopp-watch/e6-stopp-watch.component';
import { GreetingPipe } from './e5-hello-world-pipe/greeting.pipe';
import { DiffPipePipe } from './e6-stopp-watch/diff-pipe.pipe';
import {FormsModule} from "@angular/forms";
import { E7ComponentComponent } from './e7-component/e7-component.component';
import { WarningMessageComponent } from './e7-component/warning-message/warning-message.component';
import { ErrorMessageComponent } from './e7-component/error-message/error-message.component';
import { ServerComponentComponent } from './e8-server/server-component/server-component.component';
import {E8ServerComponent} from "./e8-server/e8-server.component";
import { CockpitComponent } from './e8-server/cockpit/cockpit.component';

@NgModule({
    declarations: [
        AppComponent,
        E2HelloNameComponent,
        E3FibonacciComponent,
        E4F1Component,
        E5HelloWorldPipeComponent,
        E6StoppWatchComponent,
        GreetingPipe,
        DiffPipePipe,
        E7ComponentComponent,
        WarningMessageComponent,
        ErrorMessageComponent,
        ServerComponentComponent,
        E8ServerComponent,
        CockpitComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
