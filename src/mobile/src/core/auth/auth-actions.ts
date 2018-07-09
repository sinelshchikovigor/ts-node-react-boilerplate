import {AuthUtils} from './auth-utils';

export const AUTH_USER_LOGIN_SUCCESS = 'auth/userLoginSuccess';
export const AUTH_USER_LOGIN_FAILURE = 'auth/userLoginFailure';

export const userLogin = (username: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const user = await AuthUtils.login(username, password);

            return dispatch({
                type: AUTH_USER_LOGIN_SUCCESS,
                user,
            });
        } catch (e) {
            return dispatch({
                type: AUTH_USER_LOGIN_FAILURE,
            });
        }
    };
};