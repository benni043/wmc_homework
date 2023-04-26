import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: "posts", component: PostsComponent},
  {path: "post/:id", component: PostComponent},
  {path: "**", redirectTo: "posts"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
