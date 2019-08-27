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

  createNewPost(post:Post){
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(postId:number){
    this.posts.splice(postId,1);
    this.emitPosts();
  }


  onLoveIt(postId:number) {
    if(this.posts[postId]) {
      this.posts[postId].loveIts++;
      this.emitPosts();
    }
  }

  onDontLoveIt(postId:number) {
    if(this.posts[postId]) {
      this.posts[postId].loveIts--;
      this.emitPosts();
    }
  }
}
