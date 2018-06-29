import {User} from 'common/models';
import {UserRoles} from 'common/const';
import {WWW} from 'www/www';

/**
 * Auth module.
 *
 * @export
 * @abstract
 * @class Auth
 */
export abstract class Auth {
    /**
     * Current application logged user.
     *
     * @static
     * @type {(User | null)}
     * @memberof Auth
     */
    public static user: User | null = null;

    /**
     * Checks if user is logged.
     *
     * @static
     * @returns If user is logged.
     * @memberof Auth
     */
    public static isLoggedIn() {
        return Boolean(Auth.user);
    }

    /**
     * Checks if user is an admin.
     *
     * @static
     * @returns If user is an admin.
     * @memberof Auth
     */
    public static isAdmin() {
        return Auth.user && Auth.user.role === UserRoles.ADMIN;
    }

    /**
     * Checks if user is a guest.
     *
     * @static
     * @returns If user is a guest.
     * @memberof Auth
     */
    public static isGuest() {
        return Auth.user && Auth.user.role === UserRoles.GUEST;
    }

    /**
     * Checks if user is a moderator.
     *
     * @static
     * @returns If user is a moderator.
     * @memberof Auth
     */
    public static isModerator() {
        return Auth.user && Auth.user.role === UserRoles.MODERATOR;
    }

    /**
     * Checks if user is authorized.
     *
     * @static
     * @returns
     * @memberof Auth
     */
    public static isAuthorized() {
        return Auth.user && Auth.user.role === UserRoles.AUTHORIZED;
    }

    /**
     * Checks if passed user is current application user.
     *
     * @static
     * @param {User} user User
     * @returns If passed user is current application user.
     * @memberof Auth
     */
    public static isCurrent(user: User) {
        const contextUser = Auth.user;
        return contextUser && user && user.login === contextUser.login;
    }

    /**
     * Sets application user.
     *
     * @static
     * @param {User} user Application user.
     * @memberof Auth
     */
    public static setUser(user: User | null) {
        Auth.user = user;

        WWW.setState({
            ...WWW.getState(),
            user,
        });
    }
}
