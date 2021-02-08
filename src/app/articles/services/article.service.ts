import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from 'src/app/shared';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  searchUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
  topStoriesUrl = 'https://api.nytimes.com/svc/topstories/v2/';
  communityUrl = 'https://api.nytimes.com/svc/community/v3/user-content/url.json';

  constructor(private http: HttpClient) { }

  searchArticles(query: string): Observable<Article[]> {
    const options = createRequestOption({ 'api-key': environment.nyTimesApiKey, q: query });
    return this.http.get<any>(this.searchUrl, { params: options })
      .pipe(map(response => response.response.docs));
  }

  getArticlesBySection(section: string): Observable<Article[]> {
    const options = createRequestOption({ 'api-key': environment.nyTimesApiKey });
    return this.http.get<any>(`${this.topStoriesUrl}${section}.json`, { params: options })
      .pipe(map(response => response.results));
  }

  getArticleComments(articleUrl: string): Observable<Comment[]> {
    const options = createRequestOption({ 'api-key': environment.nyTimesApiKey, url: articleUrl });
    return this.http.get<any>(this.communityUrl, { params: options })
      .pipe(map(response => response.results));
  }
}
