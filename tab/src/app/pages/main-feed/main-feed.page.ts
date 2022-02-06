import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/models';
import { GlobalDataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: 'main-feed.page.html',
  styleUrls: ['main-feed.page.scss']
})
export class MainFeedPage {

  posts: Array<Post> = [];

  constructor(
    public postsService: PostsService,
    public globalDataService: GlobalDataService
  ) {
    this.ionViewDidLoad();
    console.log(this.posts);
  }

  doRefresh(e: any) {
    this.ionViewDidLoad();
    setTimeout(() => {
      console.log('Async operation has ended');
      e.target.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    // this.checkFiles();
    this.posts = [];
    let names = ["Rohan Gupta", "Trevor Asbery", "Isaac Wahout", "Nic Buxbaum"];
    let images = [
      "https://media-exp1.licdn.com/dms/image/C5603AQE5SRdeHSGpSw/profile-displayphoto-shrink_800_800/0/1563750797361?e=1649894400&v=beta&t=SlS8ID-RFHr9_tYX4nQRehX00tuGBE7cDg0qVHzEfMc",
      "https://static.hudl.com/users/prod/2981017_1dc044d9845540e2bd428ab584d976f8.jpg",
      "https://media-exp1.licdn.com/dms/image/C5603AQHX3WT3lg1JyQ/profile-displayphoto-shrink_200_200/0/1600114778799?e=1648684800&v=beta&t=TD6NiBTY4ufQzh3nUoW2Dsum6KKJrdWhpVtoAwWAstY",
      "https://pbs.twimg.com/profile_images/866688612578013186/9rl9O8k6_400x400.jpg"
    ]
    let samples = [
      "This time, Daniel Brennan was not available to inform us and it was just my bored web surfing that spotted the notice.",
      "David Dean, without a remote control, had difficulty with the TV and these two old fogies were out surfing the net like a couple of Silicon Valley youngsters.",
      "In close proximity are Bossiney Cove and Trebarwith Strand, both are ideal bathing and surfing beaches.",
      "Surfing - Are you a bit of a beach bum?",
      "Kite surfing holidays combine the exhilaration of kite flying with the adrenalin.. .",
      "Surfing lessons, surfboards, surfboard and wetsuit hire, surf clothing at GSD the 4 star surfing school.. .",
      "Interesting Facts Our club takes part in various different kayaking disciplines including whitewater river running, canoe polo, kayak surfing, and freestyle.",
      "Surfing can be carried out on a variety of equipment, including surfing can be carried out on a variety of equipment, including surfboards, bodyboards, wave skis, kneeboards and surf mats.",
      "In competitive surfing, riders compete in pairs or small groups."
    ]
    for(let i = 0; i < 100; i++) {
      if (i == 3 && this.globalDataService.showAd) {
        let post = new Post("Jack's Surfboards", "", "buy my surfboard you piece of shit", new Date(), true);
        this.posts.push(post);
      } else {
        let post = new Post(
          names[i % 4],
          samples[i % 9],
          images[i % 4],
          new Date(),
          false
        );
        this.posts.push(post);
      }
    }
  }
}
