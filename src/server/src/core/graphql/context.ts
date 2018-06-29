import * as express from 'express';
import {User} from '../../../../common/models';

/**
 * GraphQL execution context.
 *
 * @todo add user to context
 *
 * @export
 * @class Context
 * @template Args
 */
export class Context<Args> {
    constructor(
        public request: express.Request,
        public response: express.Response,
        public args: Args,
        public user: User | null,
    ) { }
}
