import {store} from '../state';
import {userLogin} from './auth-actions';

export abstract class Auth {
    public static login(username: string, password: string) {
        return userLogin(username, password);
    }

    static get user() {
        const state = store.getState();
        return state.auth.user;
    }
}