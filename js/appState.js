const msgs = {
    SUCCESS: 'Login success!',
    ERROR: 'Wrong password!'
}

class AppState {
    constructor() {
        this.loggedIn = false;
    }

    logIn(responseObj) {
        this.logOut();
        if (responseObj.message === msgs.SUCCESS && responseObj.token) {
            this.loggedIn = true;
            this.token = responseObj.token;
        }
    }

    logOut() {
        this.loggedIn = false;
        this.token = null;
    }

}

export const appState = new AppState();