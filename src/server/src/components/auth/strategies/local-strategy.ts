import {Strategy, VerifyFunction, IVerifyOptions} from 'passport-local';
import {DB} from '../../../core';
import {Users} from '../../';

const onVerify: VerifyFunction = (
    login: string,
    password: string,
    done: (error: any, user?: any, options?: IVerifyOptions) => void,
) => {
    DB
        .get()
        .getRepository(Users)
        .findOne({where: {login, password}})
        .then((user) => {
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
        .catch((error) => {
            done(error);
        });
};

export const localStrategy = new Strategy({
    usernameField: 'login',
    passwordField: 'password',
}, onVerify);
