import { Multimedia } from './multimedia.model';


/**
 * Article type returned when loading articles
 */
export interface Article {
    /** article's section */
    section: string;
    /** article's sub section */
    subsection: string;
    /** article's title */
    title: string;
    /** article's abstract */
    abstract: string;
    /** article's url */
    url: string;
    /** article's uri */
    uri: string;
    /** article's author */
    byline: string;
    /** article's type */
    item_type: string;
    /** article's update date */
    updated_date: string;
    /** article's creation date */
    created_date: string;
    /** article's publish date */
    published_date: string;
    /** article's tags */
    des_facet: [];
    /** article's media links */
    multimedia: Multimedia[];
}
