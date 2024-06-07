import {Media, MediaWithRating} from "./media";
import {User} from "./user";
import * as moment from 'moment';

export class SendRecommendationForm {
    mediaId: string;
    rating: number;
    comment: string;
    userIds: string[];

    constructor(mediaId: string, rating: number, comment: string, userIds: string[]) {
        this.mediaId = mediaId;
        this.rating = rating;
        this.comment = comment;
        this.userIds = userIds;
    }
}

export class Recommendation {
    id: string;
    media: MediaWithRating;
    rating: number;
    comment: string;
    sentBy: User;
    sentAt: Date;
    receivers: User[];

    constructor(json: any) {
        this.id = json.id;
        this.media = new MediaWithRating(json.media);
        this.rating = json.rating;
        this.comment = json.comment;
        this.sentBy = new User(json.sentBy);
        this.receivers = json.receivers.map((userJson: any) => new User(userJson));
        this.sentAt = moment(json.sentAt).toDate();
    }
}
