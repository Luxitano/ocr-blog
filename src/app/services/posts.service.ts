import {Post} from "../models/post.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class PostsService {

  posts = [];
  postsSubject = new Subject<Post[]>();

  constructor(){
    this.posts.push(new Post("Mon premier post","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"));
    this.posts.push(new Post("Mon deuxième post","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"));
    this.posts.push(new Post("Encore un post","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"));
  }

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  addPost(post:Post){
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post:Post){
    this.posts = this.posts.slice(this.posts.indexOf(post),1);
    this.emitPosts();
  }
}
