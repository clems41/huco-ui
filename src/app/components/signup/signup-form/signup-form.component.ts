import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router, RouterLink} from "@angular/router";
import {UserLogin, UserSignUpForm} from "../../../models/user";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-signup-form',
  standalone: true,
    imports: [
        InputGroupAddonModule,
        InputGroupModule,
        ReactiveFormsModule,
        InputTextModule,
        PasswordModule,
        NgIf,
        RouterLink
    ],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
    signUpForm: FormGroup;
    isSubmitted = false;
    signupFailed = false;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            displayName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get formControls() {
        return this.signUpForm.controls;
    }

    signUp() {
        this.isSubmitted = true;
        if (this.signUpForm.invalid) {
            return;
        }
        this.authService.signUp(new UserSignUpForm(
            this.signUpForm.value.getUsername,
            this.signUpForm.value.getPassword,
            this.signUpForm.value.getEmail,
            this.signUpForm.value.getDisplayName
        ))
            .subscribe({
                next: (user) => {
                    this.authService.signIn(new UserLogin(
                        this.signUpForm.value.getUsername,
                        this.signUpForm.value.getPassword
                    ))
                        .subscribe({
                            next: (user) => {
                                this.router.navigateByUrl('/');
                            },
                            error:
                                (error) => {
                                    this.router.navigateByUrl('/signin');
                                }
                        });
                },
                error:
                    (error) => {
                        this.signupFailed = true;
                    }
            });
    }

}
