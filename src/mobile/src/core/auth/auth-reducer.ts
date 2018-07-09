import * as AuthActions from './auth-actions';
import {User} from '../../../../common/models/user';
import {Locale} from '../../locale';

export interface IAuthState {
    user: User | null;
    error: string | null;
}

const initialState: IAuthState = {
    user: null,
    error: null,
};

export const authReducer = (state: IAuthState = initialState, action: any): IAuthState => {
    switch (action.type) {
        case AuthActions.AUTH_USER_LOGIN_SUCCESS:
            return {
                user: action.payload,
                error: null,
            };
        case AuthActions.AUTH_USER_LOGIN_FAILURE:
            return {
                user: null,
                error: Locale.get('login.errors.loginFailure' as any),
            };
        default:
            return state;
    }
}
