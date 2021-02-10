var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"HomeComponent"},{"path":"articles","loadChildren":"./articles/articles.module#ArticlesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/articles/articles-routing.module.ts","module":"ArticlesRoutingModule","children":[{"path":"list","component":"ArticleListComponent"},{"path":"detail","component":"ArticleDetailComponent"},{"path":"search","component":"ArticleSearchComponent"}],"kind":"module"}],"module":"ArticlesModule"}]},{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"login","component":"LoginComponent"},{"path":"register","component":"RegisterComponent"}],"kind":"module"}],"module":"AuthModule"}]}],"kind":"module"}]}