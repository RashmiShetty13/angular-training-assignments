import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/model/postmodel';


@Component({
  selector: 'app-addanduploadpost',
  templateUrl: './addanduploadpost.component.html',
  styleUrls: ['./addanduploadpost.component.css']
})
export class AddanduploadpostComponent implements OnInit {
  visibleAddPost:boolean=false;
  post:Post = new Post();
  
  @Output()
  uploadPosts = new EventEmitter<Post>();
  constructor() {

   }
   posthere(){
     this.uploadPosts.emit(this.post);
     console.log("postModel Value is",this.post);
     this.post = new Post();
     this.visibleAddPost = false;     
   }

  addNewPost(){
    console.log(this.post.title);
    this.visibleAddPost = true; 
    console.log(this.visibleAddPost);
  }


  ngOnInit(): void {
  }

}
