export class User {
    username: string;
    displayName: string;
}

export class AuthUser extends User {
    id: string;
    email: string;
    topicName: string;
    relatedUser: User[];
}

export class UserLogin {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

export class UserSignUpForm {
    username: string;
    email: string;
    password: string;
    displayName: string;

    constructor(username: string, password: string, email: string, displayName: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.displayName = displayName;
    }
}
