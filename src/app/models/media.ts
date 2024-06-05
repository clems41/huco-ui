import {formatDate} from "@angular/common";
import * as moment from 'moment';
import {AppConstants} from "../constants/appConstants";

export class Media {
    id: string;
    title: string;
    originalTitle: string;
    overview: string;
    releaseDate: Date;
    posterPath: string;
    backdropPath: string;
    trailerUrl: string;
    director: string;
    actors: string[];
    originalLanguage: string;
    genres: string[];
    runtime: number;
    mediaType: MediaType;

    constructor(json: any) {
        this.id = json.id;
        this.title = json.title;
        this.releaseDate = moment(json.releaseDate, AppConstants.DATE_FORMAT).toDate();
        this.posterPath = json.posterUrl;
        this.backdropPath = json.backdropUrl;
        this.trailerUrl = json.trailerUrl;
        this.genres = json.genres;
        this.runtime = json.runtime;
        this.mediaType = json.mediaType;
        this.originalTitle = json.originalTitle;
        this.overview = json.overview;
        this.originalLanguage = json.originalLanguage;
        this.director = json.director;
        this.actors = json.actors != null ? json.actors.split(',') : [];
    }

    getFirstGenre(): string {
        return this.genres !== undefined ? this.genres[0] : '';
    }

    getRuntimeFormatted(): string {
        if(this.runtime === undefined || this.runtime === 0) {
            return '';
        }
        const hours = Math.floor(this.runtime / 60);
        const minutes = this.runtime % 60;
        const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
        return `${hours}h${minutesString}`;
    }

    shouldNotBeDisplayed(): boolean {
        return this.posterPath === null || this.backdropPath === null || this.overview === null;
    }

    getReleaseYear(): number {
        return this.releaseDate.getFullYear();
    }
}

export class MediaWithRating extends Media {
    ratingAverage: number;
    ratingCount: number;
    personalComment: string;
    personalRating: number;

    constructor(json: any) {
        super(json);
        this.ratingAverage = json.recommendationRatingAverage;
        this.ratingCount = json.recommendationRatingCount;
        this.personalComment = json.personalComment;
        this.personalRating = json.personalRating;
    }
}
export enum MediaType {
    Movie = 'MOVIE',
    TvShow = 'TV_SHOW'
}
