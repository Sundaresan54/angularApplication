import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model'
import { PostServices } from '../post.service'


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  //event emitter 
  // @Output() postCreated = new EventEmitter<Post>();
  constructor(public PostServices:PostServices) { }

  ngOnInit() {
  }


  onAddPost(form: NgForm) {
    // const post:Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    this.PostServices.addPost(form.value.title, form.value.content)
    // this.postCreated.emit(post);
  }

}
