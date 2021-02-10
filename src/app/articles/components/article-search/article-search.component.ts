import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { ArticleSearch, ArticleSearchMeta } from '../../models/article-search.model';
import * as ArticleActions from '../../state/article.actions'
import * as ArticleSelector from '../../state/article.selectors';

@Component({
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements OnInit {

  searchHistory$: Observable<string[]>;
  articles$: Observable<ArticleSearch[]>;
  pagination$: Observable<ArticleSearchMeta>;

  page: number = 0;
  searchControl = new FormControl('', []);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  search() {
    this.page = 0;
    this.store.dispatch(ArticleActions.searchArticle({ query: this.searchControl.value, page: this.page }));

    this.articles$ = this.store.pipe(select(ArticleSelector.selectSearchResult));
    this.pagination$ = this.store.pipe(select(ArticleSelector.selectSearchResultMeta));
    this.searchHistory$ = this.store.pipe(select(ArticleSelector.selectSearchHistory));
  }

  loadNextPage() {
    this.page++;
    this.store.dispatch(ArticleActions.searchArticle({ query: this.searchControl.value, page: this.page }));
  }
}
