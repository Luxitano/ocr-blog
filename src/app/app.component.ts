import { Component } from '@angular/core';
import {Post} from "./models/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ocr';

  postList = []

  content = "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  
  constructor(){
	this.postList.push(new Post("Mon premier post",this.content));
    this.postList.push(new Post("Mon premier post",this.content));
    this.postList.push(new Post("Mon premier post",this.content));
  }


}
