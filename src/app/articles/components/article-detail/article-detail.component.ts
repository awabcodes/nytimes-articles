import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { Article } from '../../models/article.model';
import * as ArticleSelector from '../../state/article.selectors';
import * as ArticleActions from '../../state/article.actions';

@Component({
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  articleUrl: string;
  article$: Observable<Article>;
  comments$: Observable<Comment>;

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe({
      next: queryParams => this.articleUrl = queryParams.url
    });

    this.article$ = this.store.pipe(
      select(ArticleSelector.selectEntityById, { id: this.articleUrl })
    );

    this.loadComments();
  }

  loadComments() {
    this.store.dispatch(ArticleActions.loadArticleComments({ articleUrl: this.articleUrl }));
    this.comments$ = this.store.pipe(select(ArticleSelector.selectArticleComments));
  }
}
