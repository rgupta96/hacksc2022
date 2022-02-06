import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/models';
import { GlobalDataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.scss'],
})
export class FeedPostComponent implements OnInit {
  @Input() post: Post;
  blurred: boolean;

  constructor(public globalDataService: GlobalDataService) {

  }

  ngOnInit() {
    this.blurred = this.post.isAd;
  }

  seeAd() {
    this.blurred = false;
    this.globalDataService.addToUserETH(.0000002);
  }
}
