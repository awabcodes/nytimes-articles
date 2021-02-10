import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Article } from '../../models/article.model';


/**
 * Article Card Component
 */
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent implements OnInit {

  /** The article to display */
  @Input() article: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
