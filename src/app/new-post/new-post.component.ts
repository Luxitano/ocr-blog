import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  errorMessage: string;

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

  onSubmit(){
	const title = this.postForm.get('title').value;
	const content = this.postForm.get('content').value;
	
	this.postsService.createNewPost(content, title).then(
		() => {
			this.router.navigate(['/posts']);
		},
		(error:any) => {
			this.errorMessage = error;
		}
	);
  }
}
