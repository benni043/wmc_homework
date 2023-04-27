import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../postType";
import {PostService} from "../post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor(public postService: PostService) {
  }

}
