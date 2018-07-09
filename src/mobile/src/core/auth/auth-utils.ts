import {User} from '../../../../common/models';
import {RequestUtil} from '../../utils';

export class AuthUtils {
    public static async login(username: string, password: string): Promise<User> {
        return RequestUtil.fetch<User>('', {
            body: JSON.stringify({
                username,
                password,
            })
        });
    }
}