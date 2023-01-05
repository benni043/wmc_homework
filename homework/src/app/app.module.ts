import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { E2HelloNameComponent } from './e2-hello-name/e2-hello-name.component';
import { E3FibonacciComponent } from './e3-fibonacci/e3-fibonacci.component';
import { E4F1Component } from './e4-f1/e4-f1.component';
import { E5HelloWorldPipeComponent } from './e5-hello-world-pipe/e5-hello-world-pipe.component';
import { E6StoppWatchComponent } from './e6-stopp-watch/e6-stopp-watch.component';
import { GreetingPipe } from './e5-hello-world-pipe/greeting.pipe';
import { DiffPipePipe } from './e6-stopp-watch/diff-pipe.pipe';
import { E7ComponentComponent } from './e7-component/e7-component.component';
import { WarningMessageComponent } from './e7-component/warning-message/warning-message.component';
import { ErrorMessageComponent } from './e7-component/error-message/error-message.component';
import { ServerComponentComponent } from './e8-server/server-component/server-component.component';
import {E8ServerComponent} from "./e8-server/e8-server.component";
import { CockpitComponent } from './e8-server/cockpit/cockpit.component';
import { E9LifecycleTrackerComponent } from './e9-lifecycle-tracker/e9-lifecycle-tracker.component';
import { TextOutputComponent } from './e9-lifecycle-tracker/text-output/text-output.component';
import { E0ChristmasComponent } from './e0-christmas/e0-christmas.component';
import { ChildComponent } from './e0-christmas/child/child.component';
import { PresentComponent } from './e0-christmas/present/present.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateChildComponent } from './e0-christmas/create-child/create-child.component';
import { CreatePresentComponent } from './e0-christmas/create-present/create-present.component';

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
        E9LifecycleTrackerComponent,
        TextOutputComponent,
        E0ChristmasComponent,
        ChildComponent,
        PresentComponent,
        CreateChildComponent,
        CreatePresentComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        DragDropModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
