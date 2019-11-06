import { Post } from './post.model'

import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http';


export class PostServices{
    private posts:Post[] = [];
    private updatedPosts = new Subject<Post[]>()

constructor(private http:HttpClient) {}
    getPosts() {
        this.http.get<{message:string,post:Post[]}>("http://localhost:3000/api/posts")
        .subscribe((postData) => {
            this.posts = postData.post;
            this.updatedPosts.next([...this.posts]);
        });
    }

    addPost(title:string,content:string) {
        const post:Post ={
            id:null,
            title:title,
            content:content
        }
        console.log(post,"service")
        this.http.post<{message:string}>("http://localhost:3000/api/posts",post)
        .subscribe((responseData) =>{
            console.log(responseData.message)
            this.posts.push(post)
        this.updatedPosts.next([...this.posts])
        })
        
        
    }

    getUpdatePostListner()
 {
        return this.updatedPosts.asObservable()
 }
}