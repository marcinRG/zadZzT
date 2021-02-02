const msgs = {
    SUCCESS: 'Login success!',
    ERROR: 'Wrong password!'
}

class AppState {
    constructor() {
        this.loggedIn = false;
        this.loginError = false;
        this.token = null;
    }

    logIn(responseObj) {
        this.logOut();
        if (responseObj.message === msgs.SUCCESS && responseObj.token) {
            this.loggedIn = true;
            this.token = responseObj.token;
        } else {
            this.loginError = true;
        }
    }

    logOut() {
        this.loginError = false;
        this.loggedIn = false;
        this.token = null;
    }

}

export const appState = new AppState();