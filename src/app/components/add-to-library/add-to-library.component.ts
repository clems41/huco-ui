import {Component, OnDestroy, OnInit} from '@angular/core';
import {DialogService, DynamicDialogComponent, DynamicDialogRef} from "primeng/dynamicdialog";
import {Media, MediaWithRating} from "../../models/media";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AutoCompleteModule} from "primeng/autocomplete";
import {InputTextareaModule} from "primeng/inputtextarea";
import {NgIf, NgStyle} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {RatingModule} from "primeng/rating";
import {MessageService, SharedModule} from "primeng/api";
import {LibraryService} from "../../services/library.service";
import {Router} from "@angular/router";
import {AddToLibraryRequest} from "../../models/library";
import {AppConstants} from "../../constants/appConstants";

@Component({
    selector: 'app-add-to-library',
    standalone: true,
    imports: [
        AutoCompleteModule,
        InputTextareaModule,
        NgIf,
        PaginatorModule,
        RatingModule,
        ReactiveFormsModule,
        SharedModule,
        NgStyle
    ],
    templateUrl: './add-to-library.component.html',
    styleUrl: './add-to-library.component.scss'
})
export class AddToLibraryComponent implements OnInit, OnDestroy {

    instance: DynamicDialogComponent | undefined;
    form: FormGroup;
    protected media: Media;
    isSubmitted = false;

    constructor(public ref: DynamicDialogRef, private dialogService: DialogService,
                private formBuilder: FormBuilder, private libraryService: LibraryService,
                private messageService: MessageService,
                private router: Router) {
        this.instance = this.dialogService.getInstance(this.ref);
    }

    ngOnInit(): void {
        if (this.instance && this.instance.data) {
            this.media = this.instance.data['media'];
        }
        this.form = this.formBuilder.group({
            comment: [null],
            rating: [null, Validators.required]
        });
    }

    ngOnDestroy(): void {
    }

    get formControls() {
        return this.form.controls;
    }

    addToLibrary() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        this.libraryService.addMediaToLibrary(
            this.media.id,
            new AddToLibraryRequest(this.form.value.comment, this.form.value.rating)).subscribe({
                next: () => {
                    this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Média ajouté à votre librairie !'});
                    this.ref.close();
                },
                error: (error: string) => {
                    this.messageService.add({severity: 'error', summary: 'Erreur', detail: error});
                    this.ref.close();
                }
            }
        );
    }

    protected readonly Constants = AppConstants;
}
