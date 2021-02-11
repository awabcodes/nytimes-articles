import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from 'src/app/shared';
import { map } from 'rxjs/operators';
import { ArticleSearchResponse } from '../models/article-search.model';


/**
 * Responsible for consuming with the NY Times API
 */
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  searchUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
  topStoriesUrl = 'https://api.nytimes.com/svc/topstories/v2/';
  communityUrl = 'https://api.nytimes.com/svc/community/v3/user-content/url.json';

  /**
   * @param http http client
   * @constructor
   */
  constructor(private http: HttpClient) { }

  /**
   * responsible for articles search
   * @param query search keyword
   * @param page page number
   * @returns search results with pagination info
   */
  searchArticles(query: string, page?: number): Observable<ArticleSearchResponse> {
    const options = createRequestOption({ 'api-key': environment.nyTimesApiKey, q: query, page: page });
    return this.http.get<any>(this.searchUrl, { params: options })
      .pipe(map(response => response.response));
  }

  /**
   * responsible for loading articles in a section
   * @param section the articles section
   */
  getArticlesBySection(section: string): Observable<Article[]> {
    const options = createRequestOption({ 'api-key': environment.nyTimesApiKey });
    return this.http.get<any>(`${this.topStoriesUrl}${section}.json`, { params: options })
      .pipe(map(response => response.results));
  }

  /**
   * responsible for loading an article comments
   * @param articleUrl the article url
   */
  getArticleComments(articleUrl: string): Observable<Comment[]> {
    const options = createRequestOption({ 'api-key': environment.nyTimesApiKey, url: articleUrl });
    return this.http.get<any>(this.communityUrl, { params: options })
      .pipe(map(response => response.results.comments));
  }
}
