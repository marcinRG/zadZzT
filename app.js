import {route} from './router';
import {getServerResponse} from "./js/getServerResponse";

import loggedTmp from './templates/login-sucess.templ';
import homeTmp from './templates/home.templ';
import errorTmp from './templates/404.templ';
import {appState} from "./js/appState";

export const templates = {
    loggedIn: loggedTmp,
    home: homeTmp,
    error: errorTmp
}

function getUsernamePassword(form) {
    if (form && form.elements) {
        return {
            username: form.elements.username.value,
            password: form.elements.password.value,
        }
    }
}

route('/', 'home', function () {
    this.logged = appState.loggedIn;
    this.$on('.login-form', 'submit', (event) => {
        event.preventDefault();
        getServerResponse(...Object.values(getUsernamePassword(event.target))).then((data) => {
            appState.logIn(data);
            if (appState.loggedIn) {
                window.location.hash = '#/success';
            }
            this.logged = appState.loggedIn;
            this.$refresh();
        });
    });
    this.$on('.btn-logout', 'click', () => {
        appState.logOut();
        this.logged = appState.loggedIn;
        this.$refresh();
    });


});

route('/success', 'loggedIn', function () {
    this.logged = appState.loggedIn;
});

route('/test', 'testTemplate', function () {
    this.logged = appState.loggedIn;
});

route('*', 'error', function () {
});
