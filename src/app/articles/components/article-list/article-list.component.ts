import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(
    private articleService: ArticleService
  ) {
    this.articles = [];
  }

  ngOnInit(): void {
    this.articleService.getArticlesBySection('world').subscribe({
      next: response => this.articles = response,
      error: err => console.log(err)
    });
  }

}
