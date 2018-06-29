import * as _ from 'lodash';
import {User} from '../models';
import {UserRoles} from '../const';

/**
 * Utility containing methods for working with user.
 *
 * @export
 * @abstract
 * @class UserUtil
 */
export abstract class UserUtil {
    /**
     * Checks if passed list of roles contains user role.
     *
     * @static
     * @param {User} user User
     * @param {UserRoles[]} roles List of roles
     * @returns {boolean} If user contains role from the list
     * @memberof UserUtil
     */
    public static hasRoles(user: User, roles: UserRoles[]): boolean {
        return Boolean(_.find(roles, (role: UserRoles) => user.role === role));
    }
}
