import {DB, Log} from '../../../core';
import {BaseQuery} from '../../../core/graphql/base-query';
import {UserRoles} from '../../../../../common/const';
import {Users} from '../models/users';
import {UserInputType, UserType} from '../';

interface ICreateUserMutationArgs {
    user: Users;
}

/**
 * Mutation for creating a new user.
 *
 * @export
 * @class CreateUserMutation
 * @extends {(BaseQuery<Users | null, ICreateUserMutationArgs>)}
 */
export class CreateUserMutation extends BaseQuery<Users | null, ICreateUserMutationArgs> {
    public type = UserType;

    public args = {
        user: {
            name: 'User',
            type: UserInputType,
        },
    };

    public permissions = [
        UserRoles.ADMIN,
        UserRoles.AUTHORIZED,
        UserRoles.GUEST,
        UserRoles.MODERATOR,
    ];

    public async execute(args: ICreateUserMutationArgs) {
        try {
            if (args && args.user) {
                const user = new Users(args.user);
                const createdUser = await DB.get().getRepository(Users).save(user);
                return createdUser || null;
            }
        } catch (error) {
            Log.error(error);
        }

        return null;
    }
}
