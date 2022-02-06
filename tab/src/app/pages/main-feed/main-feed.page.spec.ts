import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';
import { FeedPostComponentModule } from 'src/app/components/feed-post/feed-post.module';
import { MainFeedPage } from './main-feed.page';

describe('MainFeedPage', () => {
  let component: MainFeedPage;
  let fixture: ComponentFixture<MainFeedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainFeedPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, FeedPostComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MainFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
