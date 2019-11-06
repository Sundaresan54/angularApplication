import { Component, OnInit, Input, OnDestroy } from '@angular/core';
 import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import {PostServices} from '../post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postSubscription:Subscription
  constructor(public PostServices:PostServices) { }

  ngOnInit() {
    this.PostServices.getPosts()
   this.postSubscription = this.PostServices.getUpdatePostListner().subscribe((post)=>{
      this.posts = post
    })
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
