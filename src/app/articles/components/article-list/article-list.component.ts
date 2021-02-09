import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { Article } from '../../models/article.model';;
import * as ArticleActions from '../../state/article.actions'
import * as ArticleSelector from '../../state/article.selectors';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe({
      next: queryParams => this.loadArticles(queryParams.section)
    });
  }

  loadArticles(section: string) {
    if (section === 'world') {
      this.store.dispatch(ArticleActions.loadWorldArticles());
    } else {
      this.store.dispatch(ArticleActions.loadScienceArticles());
    }

    this.articles$ = this.store.pipe(select(ArticleSelector.selectAllArticles));
  }

}
