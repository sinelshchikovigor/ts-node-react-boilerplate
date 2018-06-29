import * as passport from 'passport';
import {DB} from '../../core';
import {Users} from '../';
import {localStrategy} from './strategies';

/**
 * Authentication component. Uses 'passport' library for authentication.
 *
 * @see https://github.com/jaredhanson/passport
 *
 * @export
 * @abstract
 * @class Auth
 */
export abstract class Auth {
    /**
     * Initializes application authentication.
     *
     * @memberof AuthRouter
     */
    public static init() {
        passport.use(localStrategy);

        passport.serializeUser((user: Users, next) => {
            next(null, user.id);
        });

        passport.deserializeUser((id, next) => {
            DB
                .getRepository(Users)
                .findOneById(id)
                .then((user) => {
                    if (user) {
                        next(null, user);
                    } else {
                        next('User not found');
                    }
                })
                .catch((error) => {
                    next(error);
                });
        });
    }
}
