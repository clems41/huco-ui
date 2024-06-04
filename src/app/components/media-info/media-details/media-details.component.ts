import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaWithRating} from "../../../models/media";
import {MediaService} from 'src/app/services/media.service';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {AppConstants} from "../../../constants/appConstants";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-media-details',
    standalone: true,
    imports: [
        RatingModule,
        FormsModule
    ],
    templateUrl: './media-details.component.html',
    styleUrl: './media-details.component.scss'
})
export class MediaDetailsComponent implements OnInit, OnDestroy {
    protected media: MediaWithRating;
    private routeSub: Subscription;

    constructor(private mediaService: MediaService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe(params => {
            let mediaId: string = params['id'];
            this.mediaService.getMediaById(mediaId)
                .subscribe((res) => {
                    this.media = res;
                });
        });
    }

    ngOnDestroy(): void {
        this.routeSub.unsubscribe();
    }

    protected readonly Constants = AppConstants;
}
