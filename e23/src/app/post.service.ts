import {Injectable} from '@angular/core';
import {Comment, Post} from "./postType";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  comments: Comment[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts/").subscribe((posts) => {
      this.posts = posts;
    })
  }

  getComments(id: number) {
    this.httpClient.get<Comment[]>("https://jsonplaceholder.typicode.com/posts/" + id + "/comments").subscribe((comments) => {
      this.comments = comments;
    })
  }

  getById(id: number): Post {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) return this.posts[i];
    }
    throw new Error;
  }


}
