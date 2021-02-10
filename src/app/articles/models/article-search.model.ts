
/**
 * Articles search response
 */
export interface ArticleSearchResponse {
    /** search result */
    docs: ArticleSearch[],
    /** pagination info */
    meta: ArticleSearchMeta
}

/**
 * Article search result type
 */
export interface ArticleSearch {
    /** search result's section name */
    section_name: string;
    /** search result's headline */
    headline: { main: string };
    /** search result's snippet */
    snippet: string;
    /** search result's abstract */
    abstract: string;
    /** search result's url */
    web_url: string;
    /** search result's source */
    source: string;
    /** search result's author */
    byline: { original: string };
    /** search result's publish date */
    pub_date: string;
}

/**
 * Articles search meta info (pagination)
 */
export interface ArticleSearchMeta {
    /** total search hits */
    hits: number;
    /** time it took */
    time: number;
    /** page offset */
    offset: number;
}