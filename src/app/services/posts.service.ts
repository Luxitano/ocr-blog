import {Post} from "../models/post.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {

  defaultPosts = []; //If database is empty, store defaults posts
  posts = [];
  postsSubject = new Subject<Post[]>();

  constructor(){
    //this.defaultPosts.push(new Post("Mon premier post","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"));
    //this.defaultPosts.push(new Post("Mon deuxième post","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"));
    //this.defaultPosts.push(new Post("Encore un post","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"));
    this.getPosts();
  }

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  createNewPost(post:Post){
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  removePost(postId:number){
    this.posts.splice(postId,1);
    this.savePosts();
    this.emitPosts();
  }

  onLoveIt(postId:number) {
    if(this.posts[postId]) {
      this.posts[postId].loveIts++;
      this.savePosts();
      this.emitPosts();
    }
  }

  onDontLoveIt(postId:number) {
    if(this.posts[postId]) {
      this.posts[postId].loveIts--;
      this.savePosts();
      this.emitPosts();
    }
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          if(!data.val()){
            this.posts = this.defaultPosts.slice();
            this.savePosts();
            this.emitPosts();
          } else {
            this.posts = data.val();
            this.emitPosts();
          }
        }
      );
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
}
