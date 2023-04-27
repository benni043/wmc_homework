import {Injectable} from '@angular/core';
import {Post} from "./postType";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts/").subscribe((posts) => {
      this.posts = posts;
    })
  }

  getById(id: number): Post {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) return this.posts[i];
    }
    throw new Error;
  }
}
