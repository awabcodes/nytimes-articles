import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { Article } from '../../models/article.model';
import * as ArticleSelector from '../../state/article.selectors';

@Component({
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  articleId: string;
  article$: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');

    this.article$ = this.store.pipe(
      select(ArticleSelector.selectEntityById, { id: this.articleId })
    );
  }
}
