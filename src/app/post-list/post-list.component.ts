import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../models/post.model";
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
	this.postSubscription = this.postsService.postsSubject.subscribe(
	  (posts: any[]) => {
		this.posts = posts;
	});
	this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
