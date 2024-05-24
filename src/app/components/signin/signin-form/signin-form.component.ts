import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserLogin} from "../../../models/user";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputTextModule} from "primeng/inputtext";
import {NgIf} from "@angular/common";
import {PasswordModule} from "primeng/password";

@Component({
    selector: 'app-signin-form',
    standalone: true,
    imports: [
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        ReactiveFormsModule,
        NgIf,
        PasswordModule,
        RouterLink
    ],
    templateUrl: './signin-form.component.html',
    styleUrl: './signin-form.component.scss'
})
export class SigninFormComponent implements OnInit {
    authForm: FormGroup;
    isSubmitted = false;
    authenticationFailed = false;


    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get formControls() {
        return this.authForm.controls;
    }

    signIn() {
        this.isSubmitted = true;
        if (this.authForm.invalid) {
            return;
        }
        this.authService.signIn(new UserLogin(this.authForm.value['username'], this.authForm.value['password']))
            .subscribe({
                next: (user) => {
                    this.router.navigateByUrl('/');
                },
                error:
                    (error) => {
                        this.authenticationFailed = true;
                    }
            });
    }
}
