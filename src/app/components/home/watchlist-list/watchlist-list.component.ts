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

@Component({
  selector: 'app-watchlist-list',
  standalone: true,
    imports: [
        ButtonModule,
        CarouselModule,
        SharedModule,
        RatingModule,
        FormsModule
    ],
  templateUrl: './watchlist-list.component.html',
  styleUrl: './watchlist-list.component.scss'
})
export class WatchlistListComponent implements OnInit{
    protected watchlist: MediaWithRating[] = [];
    constructor(private watchlistService: WatchlistService) {}
    ngOnInit(): void {
        this.watchlistService.getWatchlist().subscribe((watchlist) => {
            this.watchlist = watchlist;
        })
    }

    protected readonly Math = Math;
    protected readonly Utils = MovieUtils;
    protected readonly Constants = AppConstants;
}
