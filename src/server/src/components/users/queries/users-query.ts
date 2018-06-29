import {GraphQLList, GraphQLInt} from 'graphql';
import * as _ from 'lodash';
import {UserRoles} from '../../../../../common/const';
import {DB, Log} from '../../../core';
import {BaseQuery} from '../../../core/graphql/base-query';
import {Users, UserType} from '../';

/**
 * Users query arguments.
 *
 * @interface IUsersQueryArgs
 */
interface IUsersQueryArgs {
    /**
     * User ID.
     *
     * @type {number}
     * @memberof IUsersQueryArgs
     */
    id: number;
}

/**
 * Users query.
 *
 * @export
 * @class UsersQuery
 * @extends {BaseQuery<Users[], IUsersQueryArgs>}
 */
export class UsersQuery extends BaseQuery<Users[], IUsersQueryArgs> {
    public type = new GraphQLList(UserType);

    public permissions = [
        UserRoles.ADMIN,
        UserRoles.AUTHORIZED,
        UserRoles.GUEST,
        UserRoles.MODERATOR,
    ];

    public args = {
        id: {
            name: 'User ID',
            type: GraphQLInt,
        },
    };

    public async execute(args: IUsersQueryArgs) {
        try {
            if (args && _.isNumber(args.id)) {
                const user = await DB.get().getRepository(Users).findOneById(args.id);
                return user ? [user] : [];
            }

            const users = await DB.get().getRepository(Users).find();
            return users || [];
        } catch (error) {
            Log.error(error);
            return [];
        }
    }
}
