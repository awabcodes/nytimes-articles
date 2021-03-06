import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleSearchComponent } from './components/article-search/article-search.component';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent },
  { path: 'detail', component: ArticleDetailComponent },
  { path: 'search', component: ArticleSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
