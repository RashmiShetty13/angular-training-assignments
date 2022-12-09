import { Component } from '@angular/core';
import { Post } from './model/postmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training-assignments';
  posts: Post[] = [];  

  getNewlyCreatedPost(post:Post) {
    this.posts.push(post);
  }
}
