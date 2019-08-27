import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	
  @Input() post : Post;
  @Input() postId : number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postsService.onLoveIt(this.postId);
  }

  onDontLoveIt() {
    this.postsService.onDontLoveIt(this.postId);
  }

  onDeletePost(){
    this.postsService.removePost(this.postId);
  }

}
