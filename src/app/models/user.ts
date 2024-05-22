export class User {
    username: string;
    displayName: string;
}

export class AuthUser extends User {
    id: string;
    email: string;
}
