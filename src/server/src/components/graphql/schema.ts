import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import {UsersQuery, CreateUserMutation} from '../users';

/**
 * GraphQL root schema.
 *
 * @export
 * @abstract
 * @class Schema
 */
export abstract class Schema {
    /**
     * GraphQL schema root query.
     *
     * @static
     * @memberof Schema
     */
    public static rootQuery = new GraphQLObjectType({
        name: 'Query',
        fields: {
            users: new UsersQuery() as any,
        },
    });

    /**
     * GraphQL schema root mutation.
     *
     * @static
     * @memberof Schema
     */
    public static rootMutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createUser: new CreateUserMutation() as any,
        },
    });

    /**
     * GraphQL schema instance
     *
     * @static
     * @type {GraphQLSchema}
     * @memberof Schema
     */
    public static instance: GraphQLSchema = new GraphQLSchema({
        query: Schema.rootQuery,
        mutation: Schema.rootMutation,
    });
}
