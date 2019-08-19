import { Component, Input, OnInit } from '@angular/core';
import {Post} from "../models/post.model";


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postList: Post[];

  constructor() {

  }

  ngOnInit() {
  }

}
