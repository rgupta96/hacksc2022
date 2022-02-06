import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainFeedPage } from './main-feed.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';
import { FeedPostComponentModule } from 'src/app/components/feed-post/feed-post.module';
import { MainFeedPageRoutingModule } from './main-feed-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FeedPostComponentModule,
    MainFeedPageRoutingModule
  ],
  declarations: [MainFeedPage]
})
export class MainFeedPageModule {}
