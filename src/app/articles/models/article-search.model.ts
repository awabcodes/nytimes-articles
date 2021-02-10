
export interface ArticleSearchResponse {
    docs: ArticleSearch[],
    meta: ArticleSearchMeta
}

export interface ArticleSearch {
    section_name: string;
    headline: { main: string };
    snippet: string;
    abstract: string;
    web_url: string;
    source: string;
    byline: { original: string };
    pub_date: string;
}

export interface ArticleSearchMeta {
    hits: number;
    time: number;
    offset: number;
}