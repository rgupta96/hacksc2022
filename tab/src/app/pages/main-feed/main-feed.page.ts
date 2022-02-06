import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/models';
@Component({
  selector: 'app-main-feed',
  templateUrl: 'main-feed.page.html',
  styleUrls: ['main-feed.page.scss']
})
export class MainFeedPage {

  posts: Array<Post> = [];

  constructor(public postsService: PostsService) {
    let names = ["Rohan Gupta", "Trevor Asbery", "Isaac Wahout", "Nic Buxbaum"];
    for(let i = 0; i < 100; i++) {
      let post = new Post(names[i % 4], "Sample Text", new Date());
      this.posts.push(post);
    }
    console.log(this.posts);
    // console.log(this.postsService.getRecentPosts());
  }

  ionViewDidLoad() {
    let names = ["Rohan Gupta", "Trevor Asbery", "Isaac Wahout", "Nic Buxbaum"];
    for(let i = 0; i < 100; i++) {
      let post = new Post(names[i % 4], "Sample Text", new Date());
      this.posts.push(post);
    }
    console.log(this.posts);
  }

}
