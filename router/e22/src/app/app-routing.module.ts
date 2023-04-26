import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ThirdComponent} from "./third/third.component";

const routes: Routes = [
  {path: "first", component: FirstComponent},
  {path: "second", component: SecondComponent},
  {path: "third", component: ThirdComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
