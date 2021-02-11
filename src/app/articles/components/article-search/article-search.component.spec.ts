import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

import { ArticleSearchComponent } from './article-search.component';

describe('ArticleSearchComponent', () => {
  let component: ArticleSearchComponent;
  let fixture: ComponentFixture<ArticleSearchComponent>;
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
      declarations: [ArticleSearchComponent],
      imports: [
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search and load articles', () => {
    component.search();
    expect(component.articles$).toBeDefined();
    expect(component.searchHistory$).toBeDefined();
    expect(component.pagination$).toBeDefined();
  });
});
