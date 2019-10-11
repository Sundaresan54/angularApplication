import { Post } from './post.model'

import { Subject } from 'rxjs'

export class PostServices{
    private posts:Post[] = [];
    private updatedPosts = new Subject<Post[]>()

    getPosts() {
        return this.posts
    }

    addPost(title:string,content:string) {
        const post:Post ={
            title:title,
            content:content
        }
        this.posts.push(post)
        this.updatedPosts.next([...this.posts])
        
    }

    getUpdatePostListner()
 {
        return this.updatedPosts.asObservable()
 }
}