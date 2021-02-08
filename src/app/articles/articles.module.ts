import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleCardComponent } from './components/article-card/article-card.component';


@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule
  ]
})
export class ArticlesModule { }
