import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { Article } from '../../models/article.model';;
import * as ArticleActions from '../../state/article.actions'
import * as ArticleSelector from '../../state/article.selectors';


/**
 * Article List Page
 */
@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article[]>;

  /**
   * @param activeRoute activated route for queryParams
   * @param store app state
   */
  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe({
      next: queryParams => this.loadArticles(queryParams.section)
    });
  }

  /** Load articles action */
  loadArticles(section: string) {
    this.store.dispatch(ArticleActions.loadArticles({ section }));

    this.articles$ = this.store.pipe(select(ArticleSelector.selectAllArticles));
  }

}
