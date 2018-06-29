import * as express from 'express';
import * as _ from 'lodash';
import * as bodyParser from 'body-parser';
import {JsonController, Post, Req, Res, UseBefore} from 'routing-controllers';
import {authenticate} from 'passport';

/**
 * Application authentication controller.
 *
 * @export
 * @class AuthController
 */
@JsonController()
export class AuthController {
    /**
     * User login endpoint handler.
     *
     * @param {express.Response} res Response
     * @param {string} login User login
     * @param {string} password User password
     * @memberof AuthController
     */
    @Post('/login')
    @UseBefore(
        bodyParser.urlencoded({extended: true}),
        bodyParser.json(),
        authenticate(
            'local',
        ),
    )
    public login(
        @Res() res: express.Response,
        @Req() req: express.Request,
    ) {
        const user = _.omit(req.user, 'password');
        return res.send(JSON.stringify(user));
    }

    /**
     * User logout endpoint handler.
     *
     * @param {express.Request} req Request
     * @param {express.Response} res Response
     * @memberof AuthController
     */
    @Post('/logout')
    public logout(@Req() req: express.Request, @Res() res: express.Response) {
        req.logout();
        return res.status(200).redirect('/');
    }
}
