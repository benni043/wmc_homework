import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  id: number = -1;

  constructor(private route: ActivatedRoute, public postService: PostService) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.postService.getComments(this.id);
    })
  }

}
