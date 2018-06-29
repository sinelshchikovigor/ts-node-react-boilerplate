import {UserRoles} from '../const';

/**
 * User interface.
 *
 * @export
 * @class
 */
export class User {
    /**
     * User ID.
     *
     * @default null
     *
     * @type {(number | null)}
     * @memberof User
     */
    public id?: number | null;
    /**
     * User first name.
     *
     * @default ''
     *
     * @type {string}
     * @memberof User
     */
    public firstName?: string;
    /**
     * User last name.
     *
     * @default ''
     *
     * @type {string}
     * @memberof User
     */
    public lastName?: string;
    /**
     * User third name.
     *
     * @default ''
     *
     * @type {string}
     * @memberof User
     */
    public thirdName?: string;
    /**
     * User login.
     *
     * @default ''
     * @type {string}
     * @memberof User
     */
    public login?: string;
    /**
     * User password.
     *
     * @default ''
     *
     * @type {string}
     * @memberof User
     */
    public password?: string;
    /**
     * User role.
     *
     * @type {UserRoles}
     * @memberof User
     */
    public role?: UserRoles;
}
