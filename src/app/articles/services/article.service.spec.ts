import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ArticleSearchResponse } from '../models/article-search.model';
import { Article } from '../models/article.model';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let httpMock: HttpTestingController;
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(ArticleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get articles belonging to section', () => {

    const mockArticles = {
      results: [
        {
          section: 'world',
          subsection: 'middleeast',
          title: 'Saudi Arabia Releases Activist Who Fought for Women’s Right to Drive',
          'abstract': 'Loujain al-Hathloul was a champion of freedoms for Saudi women. She had been imprisoned for nearly three years on charges that rights groups called politically motivated.',
          url: 'https://www.nytimes.com/2021/02/10/world/middleeast/saudi-loujain-al-hathloul-freed.html',
          uri: 'nyt://article/10860018-0811-5732-9412-8f97ad573f1c',
          byline: 'By Ben Hubbard',
          item_type: 'Article',
          updated_date: '2021-02-10T16:36:24-05:00',
          created_date: '2021-02-10T13:13:39-05:00',
          published_date: '2021-02-10T13:13:39-05:00',
          des_facet: [
          ],
          multimedia: [
            {
              url: 'https://static01.nyt.com/images/2021/02/10/world/10saudi/merlin_180440862_ae173423-a50d-4b11-afd5-de499c036529-superJumbo.jpg',
              format: 'superJumbo',
              height: 1304,
              width: 2000,
              type: 'image',
              caption: 'Loujain al-Hathloul, a prominent figure in the push to allow women to drive, filmed herself at the wheel in 2014.',
              copyright: 'Loujain al-Hathloul, via Associated Press'
            }
          ]
        }
      ]
    }

    service.getArticlesBySection('world').subscribe((articles: Article[]) => {
      expect(JSON.stringify(articles)).toEqual(JSON.stringify(mockArticles.results));
    });

    const req = httpMock.expectOne('http://localhost:4200/api/topstories/v2/world.json?api-key=AaeEsnqJWTBLXL3fj8gEyuAjXHSJydsn');
    expect(req.request.method).toEqual('GET');

    req.flush(mockArticles);
  });

  it('should search for articles', () => {

    const mockSearchResult = {
      response: {
        docs: [],
        meta: {
          hits: 11,
          time: 99,
          offset: 10
        }
      }
    };


    service.searchArticles('keyword', 1).subscribe((response: ArticleSearchResponse) => {
      expect(JSON.stringify(response)).toEqual(JSON.stringify(mockSearchResult.response));
    });

    const req = httpMock.expectOne('http://localhost:4200/api/search/v2/articlesearch.json?api-key=AaeEsnqJWTBLXL3fj8gEyuAjXHSJydsn&q=keyword&page=1');
    expect(req.request.method).toEqual('GET');

    req.flush(mockSearchResult);
  });

  it('should get article comments', () => {

    const mockComments = {
      results: {
        comments: []
      }
    };


    service.getArticleComments('url').subscribe((response: Comment[]) => {
      expect(JSON.stringify(response)).toEqual(JSON.stringify(mockComments.results.comments));
    });

    const req = httpMock.expectOne('http://localhost:4200/api/community/v3/user-content/url.json?api-key=AaeEsnqJWTBLXL3fj8gEyuAjXHSJydsn&url=url');
    expect(req.request.method).toEqual('GET');

    req.flush(mockComments);
  });

});
