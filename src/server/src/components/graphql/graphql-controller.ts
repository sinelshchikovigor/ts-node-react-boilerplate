import {JsonController, UseBefore, Get, Post} from 'routing-controllers';
import * as graphqlHTTP from 'express-graphql';
import {Log} from '../../core';
import {Schema} from './schema';

/**
 * Application GraphQL router.
 *
 * @see GraphQL http://graphql.org/learn/
 *
 * @export
 * @class GraphQLController
 */
@JsonController()
export class GraphQLController {
    /**
     * GraphQL API handler.
     *
     * @memberof GraphQLController
     */
    @Get('/graphql')
    @UseBefore(graphqlHTTP({
        schema: Schema.instance,
        graphiql: true,
    }))
    public getApi() {
        return Log.verbose('Accessing GraphQL API...');
    }

    /**
     * GraphQL API handler.
     *
     * @memberof GraphQLController
     */
    @Post('/graphql')
    @UseBefore(graphqlHTTP({
        schema: Schema.instance,
        graphiql: false,
    }))
    public postApi() {
        return Log.verbose('Accessing GraphQL API...');
    }
}
