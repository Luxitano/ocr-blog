import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import {Post} from "../models/post.model";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router:Router){
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['',Validators.required],
      content: ['',Validators.required]
    });
  }

  onCreateNewPost(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;

    this.postsService.createNewPost(new Post(title,content));
    this.router.navigate(['/posts']);
  }
}
