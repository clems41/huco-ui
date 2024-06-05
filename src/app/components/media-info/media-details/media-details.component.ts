import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaWithRating} from "../../../models/media";
import {MediaService} from 'src/app/services/media.service';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {AppConstants} from "../../../constants/appConstants";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {NgIf, SlicePipe} from "@angular/common";
import {InplaceModule} from "primeng/inplace";
import {BadgeModule} from "primeng/badge";
import {CardModule} from "primeng/card";
import {WatchlistService} from "../../../services/watchlist.service";
import {LibraryService} from "../../../services/library.service";

@Component({
    selector: 'app-media-details',
    standalone: true,
    imports: [
        RatingModule,
        FormsModule,
        NgIf,
        InplaceModule,
        SlicePipe,
        BadgeModule,
        CardModule,
        RouterLink
    ],
    templateUrl: './media-details.component.html',
    styleUrl: './media-details.component.scss'
})
export class MediaDetailsComponent implements OnInit, OnDestroy {
    protected media: MediaWithRating;
    private routeSub: Subscription;
    protected readonly Constants = AppConstants;
    protected overviewOptions = {
        start: 0,
        end: AppConstants.SHORT_OVERVIEW_MAX_LENGTH,
        default: AppConstants.SHORT_OVERVIEW_MAX_LENGTH
    }
    protected isMediaInWatchlist: boolean = false;
    protected isMediaInLibrary: boolean = false;

    constructor(private mediaService: MediaService,
                private route: ActivatedRoute,
                private watchlistService: WatchlistService,
                private libraryService: LibraryService,
                public router: Router) {
    }

    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe(params => {
            let mediaId: string = params['id'];
            this.mediaService.getMediaById(mediaId)
                .subscribe((res) => {
                    this.media = res;
                });
            this.watchlistService.isMediaInWatchlist(mediaId)
                .subscribe((res) => {
                    this.isMediaInWatchlist = res;
                });
            this.libraryService.isMediaInLibrary(mediaId)
                .subscribe((res) => {
                    this.isMediaInLibrary = res;
                });
        });
    }

    ngOnDestroy(): void {
        this.routeSub.unsubscribe();
    }

    onExpandText(evt:any): void{
        this.overviewOptions.end = this.media.overview.length;
    }

    onCollapseText(evt:any): void{
        this.overviewOptions.end = this.overviewOptions.default;
    }

    addMediaToWatchlist(media: MediaWithRating): void {
        this.watchlistService.addMediaToWatchlist(media.id).subscribe(
            () => {
                this.isMediaInWatchlist = true;
            }
        );
    }

    removeMediaFromWatchlist(media: MediaWithRating): void {
        this.watchlistService.removeMediaFromWatchlist(media.id).subscribe(
            () => {
                this.isMediaInWatchlist = false;
            }
        );
    }

    onSendRecommendation(): void {
        this.router.navigateByUrl('/recommendation', { state: { media: this.media } });
    }
}
