export abstract class Error {
    static readonly userUsernameAlreadyExists: Error = {
        errorCodeFromServer: 'USER_USERNAME_ALREADY_EXISTS',
        errorMessageToDisplay: "Ce nom d'utilisateur est déjà utilisé"
    };
    static readonly userEmailAlreadyExists: Error = {
        errorCodeFromServer: 'USER_EMAIL_ALREADY_EXISTS',
        errorMessageToDisplay: "Cette adresse email est déjà utilisée"
    };
}
