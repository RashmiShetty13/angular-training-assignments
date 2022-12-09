import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/postmodel';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  @Input()
  posts:Post[] = [];

  constructor() { } 
  title = 'angular-training-assignments';
  

  getNewlyCreatedPost(post:Post) {
    this.posts.push(post);
    console.log("Title is", post.title);
    console.log("Content is", post.title);
  }
  ngOnInit(): void {
  }

}
