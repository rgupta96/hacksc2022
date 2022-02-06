import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFeedPage } from './main-feed.page';

const routes: Routes = [
  {
    path: '',
    component: MainFeedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainFeedPageRoutingModule {}
