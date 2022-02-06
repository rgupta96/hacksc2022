import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPostComponent } from './feed-post.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FeedPostComponent],
  exports: [FeedPostComponent]
})
export class FeedPostComponentModule {}
