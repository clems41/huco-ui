export class Media {
    id: string;
    title: string;
    releaseDate: Date;
    posterPath: string;
    backdropPath: string;
    trailerUrl: string;
    genres: string[];
    runtime: number;
    mediaType: MediaType;

    constructor(id: string, title: string, releaseDate: Date, posterPath: string, backdropPath: string,
                trailerUrl: string, genres: string[], runtime: number, mediaType: MediaType) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.posterPath = posterPath;
        this.backdropPath = backdropPath;
        this.trailerUrl = trailerUrl;
        this.genres = genres;
        this.runtime = runtime;
        this.mediaType = mediaType;
    }

    getFirstGenre(): string {
        return this.genres[0];
    }

    getRuntimeFormatted(): string {
        const hours = Math.floor(this.runtime / 60);
        const minutes = this.runtime % 60;
        return `${hours}h${minutes}`;
    }

    getReleaseYear(): number {
        return this.releaseDate.getFullYear();
    }
}

export class MediaWithRating extends Media {
    ratingAverage: number;
    ratingCount: number;

    constructor(media: Media, ratingAverage: number, ratingCount: number) {
        super(media.id, media.title, media.releaseDate, media.posterPath, media.backdropPath, media.trailerUrl,
            media.genres, media.runtime, media.mediaType);
        this.ratingAverage = ratingAverage;
        this.ratingCount = ratingCount;
    }
}
export enum MediaType {
    Movie = 'movie',
    TvShow = 'tv'
}
