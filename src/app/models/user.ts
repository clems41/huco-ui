export class User {
    id: string;
    username: string;
    displayName: string;
    fullName: string;

    constructor(json: any) {
        this.id = json.id;
        this.username = json.username;
        this.displayName = json.displayName;
        this.fullName = this.displayName + ' (' + this.username + ')';
    }
}

export class AuthUser extends User {
    email: string;
    topicName: string;
    relatedUsers: User[];
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
