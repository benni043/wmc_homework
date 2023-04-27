import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";
import {Post} from "../postType";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post: Post | undefined;

  constructor(private route: ActivatedRoute, public postService: PostService) {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.post = this.postService.getById(id);
    })
  }


}
