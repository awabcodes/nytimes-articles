import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {

  const initialState = {
    articles: {
      ids: [],
      entities: {},
      articleComments: null,
      searchHistory: [],
      searchResult: null,
      searchResultMeta: null,
      error: null
    },
    auth: {
      email: null,
      accessToken: null,
      error: null
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        NgxSpinnerModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nytimes-popular-articles'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nytimes-popular-articles');
  });
});
