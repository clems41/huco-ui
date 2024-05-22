import {Media} from "./media";
import {User} from "./user";

export class Recommendation {
    movie: Media;
    rating: number;
    comment:string;
    sender: User;
    receivers: User[];
}
