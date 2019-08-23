import { Component,OnInit } from '@angular/core';
import {Post} from "./models/post.model";
import {PostsService} from "./services/posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ocr';

  posts: Post[];

  postsSubscription: Subscription;

  constructor(private postService: PostsService){

  }

  ngOnInit(): void {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
  }
}
