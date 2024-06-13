import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CarouselModule} from "primeng/carousel";
import {SharedModule} from "primeng/api";
import {WatchlistService} from "../../../services/watchlist.service";
import {Media, MediaWithRating} from "../../../models/media";
import {MovieUtils} from "../../../utils/movieUtils";
import {AppConstants} from "../../../constants/appConstants";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-watchlist-list',
  standalone: true,
    imports: [
        ButtonModule,
        CarouselModule,
        SharedModule,
        RatingModule,
        FormsModule,
        RouterLink
    ],
  templateUrl: './watchlist-list.component.html',
  styleUrl: './watchlist-list.component.scss'
})
export class WatchlistListComponent implements OnInit{
    protected watchlist: MediaWithRating[] = [];
    constructor(private watchlistService: WatchlistService) {}
    ngOnInit(): void {
        this.refreshWatchlist();
    }
    protected readonly Constants = AppConstants;

    refreshWatchlist() {
        this.watchlistService.getWatchlist().subscribe((watchlist) => {
            this.watchlist = watchlist;
        })
    }

    removeFromWatchlist(media: Media) {
        this.watchlistService.removeMediaFromWatchlist(media.id)
            .subscribe(() => {
                this.refreshWatchlist();
            });
    }
}
