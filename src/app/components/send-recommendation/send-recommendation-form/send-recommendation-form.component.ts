import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Media, MediaWithRating} from "../../../models/media";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../../../models/user";
import {RecommendationService} from "../../../services/recommendation.service";
import {SendRecommendationForm} from "../../../models/sendRecommendationForm";
import {AutoCompleteModule} from "primeng/autocomplete";
import {UserService} from "../../../services/user.service";
import {MediaService} from "../../../services/media.service";
import {NgIf, NgStyle} from "@angular/common";
import {InputTextareaModule} from "primeng/inputtextarea";
import {AppConstants} from "../../../constants/appConstants";
import {RatingModule} from "primeng/rating";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-send-recommendation-form',
    standalone: true,
    imports: [
        AutoCompleteModule,
        ReactiveFormsModule,
        NgIf,
        NgStyle,
        InputTextareaModule,
        RatingModule
    ],
    templateUrl: './send-recommendation-form.component.html',
    styleUrl: './send-recommendation-form.component.scss'
})
export class SendRecommendationFormComponent implements OnInit, OnDestroy {
    recommendationForm: FormGroup;
    isSubmitted = false;
    userSuggestions: User[] = [];
    mediaSuggestions: Media[] = [];
    protected media: MediaWithRating;
    protected errorMessage: string = null;

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private recommendationService: RecommendationService,
                private userService: UserService,
                private mediaService: MediaService,
                private messageService: MessageService) {
        let currentNavigation = this.router.getCurrentNavigation();
        this.media = currentNavigation?.extras?.state != null ?
            currentNavigation.extras.state['media'] :
            null;
    }

    ngOnDestroy(): void {
    }

    ngOnInit() {
        this.recommendationForm = this.formBuilder.group({
            media: [this.media, Validators.required],
            users: [[], Validators.required],
            comment: [null],
            rating: [null, Validators.required]
        });
    }

    get formControls() {
        return this.recommendationForm.controls;
    }

    searchUser(event) {
        if (event.query.length < 3) {
            return;
        }
        this.userService.searchUsers(event.query).subscribe({
            next: (users: User[]) => {
                this.userSuggestions = users;
            }
        });
    }

    searchMedia(event) {
        if (event.query.length < 3) {
            return;
        }
        this.mediaService.searchMedias(event.query).subscribe({
            next: (media: Media[]) => {
                this.mediaSuggestions = media;
            }
        });

    }

    onSelectMedia(event) {
        this.media = this.recommendationForm.controls['media'].value;
    }

    sendRecommendation() {
        this.isSubmitted = true;
        if (this.recommendationForm.invalid) {
            return;
        }
        this.recommendationService.sendRecommendation(new SendRecommendationForm(
            this.recommendationForm.value['media'].id,
            this.recommendationForm.value['rating'],
            this.recommendationForm.value['comment'],
            this.recommendationForm.value['users'].map((user: User) => user.id)
        )).subscribe({
                next: () => {
                    this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Recommandation envoyée !'});
                    this.router.navigateByUrl('/');
                },
                error: (error: string) => {
                    this.messageService.add({severity: 'error', summary: 'Erreur', detail: error});
                }
            }
        )
    }

    protected readonly Constants = AppConstants;
}
