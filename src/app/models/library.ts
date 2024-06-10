export class AddToLibraryRequest {
    comment: string;
    rating: number;

    constructor(comment: string, rating: number) {
        this.comment = comment;
        this.rating = rating;
    }
}
