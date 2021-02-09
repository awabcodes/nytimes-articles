import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './state/article.effects';
import * as fromArticle from './state/article.reducer';


@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromArticle.articleFeatureKey, fromArticle.reducer),
    EffectsModule.forFeature([ArticleEffects])
  ]
})
export class ArticlesModule { }
