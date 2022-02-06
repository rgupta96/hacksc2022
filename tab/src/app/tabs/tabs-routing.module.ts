import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'main-feed',
        loadChildren: () => import('../pages/main-feed/main-feed.module').then(m => m.MainFeedPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('../pages/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },
      {
        path: 'advertiser-profile',
        loadChildren: () => import('../pages/advertiser-profile/advertiser-profile.module').then(m => m.AdvertiserProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/main-feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/main-feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
