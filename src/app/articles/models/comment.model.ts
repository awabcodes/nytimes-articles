/**
 * Comment type returned when getting article comments
 */
export interface Comment {
    /** comment's id */
    commentID: number;
    /** comment's status */
    status: string;
    /** comment's user name */
    userDisplayName: string;
    /** comment's user location */
    userLocation: string;
    /** comment's title */
    commentTitle: string;
    /** comment's body */
    commentBody: string;
    /** comment's creation date */
    createDate: string;
    /** comment's update date */
    updateDate: string;
    /** comment's approve date */
    approveDate: string;
    /** comment's recommendation level */
    recommendations: number;
}
