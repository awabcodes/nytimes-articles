import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ArticleDetailComponent } from './article-detail.component';

describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;
  const initialState = {
    articles: {
      ids: [],
      entities: {},
      articleComments: null,
      searchHistory: [],
      searchResult: null,
      searchResultMeta: null,
      error: null
    },
    auth: {
      email: null,
      accessToken: null,
      error: null
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleDetailComponent],
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatChipsModule
      ],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
