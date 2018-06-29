import * as _ from 'lodash';
import {GraphQLResolveInfo, GraphQLFieldConfig} from 'graphql';
import {UserRoles} from '../../../../common/const';
import {UserUtil} from '../../../../common/utils';
import {Log} from '../';
import {Context} from './context';

/**
 * Interface of GraphQL base query.
 *
 * @export
 * @interface IBaseQuery
 * @extends {GraphQLFieldConfig<Result, Context<Args>, Args>}
 * @template Result Response type
 * @template Args Arguments type
 */
export interface IBaseQuery<Result, Args> extends GraphQLFieldConfig<Result, Context<Args>, Args> {
    /**
     * Query permissions.
     *
     * @type {UserRoles[]}
     * @memberof IBaseQuery
     */
    permissions: UserRoles[];
    /**
     * Before hook of query.
     *
     * @param {Args} args Query arguments
     * @param {Context<Args>} context Execution context
     * @returns {Promise<Args>} Promise of arguments
     * @memberof IBaseQuery
     */
    before(args: Args, context: Context<Args>): Promise<Args>;
    /**
     * After hook of query.
     *
     * @param {Result} result Query result
     * @param {Args} args Query arguments
     * @param {Context<Args>} context Execution context
     * @returns {Promise<Result>} Promise of result
     * @memberof IBaseQuery
     */
    after(result: Result, args: Args, context: Context<Args>): Promise<Result>;
    /**
     * Execution hook of query.
     *
     * @param {Args} args Query arguments
     * @param {Context<Args>} context Execution context
     * @param {GraphQLResolveInfo} info Resolve information
     * @returns {Promise<Result>} Promise of result
     * @memberof IBaseQuery
     */
    execute(args: Args, context: Context<Args>, info: GraphQLResolveInfo): Promise<Result>;
}

/**
 * Base class for creating GraphQL queries.
 *
 * @export
 * @class BaseQuery
 * @implements {IBaseQuery<Result, Args>}
 * @template Result
 * @template Args
 */
export class BaseQuery<Result, Args> implements IBaseQuery<Result, Args>  {
    /**
     * @extends
     * @type {UserRoles[]}
     * @memberof BaseQuery
     */
    public permissions: UserRoles[] = [];

    /**
     * GraphQL result type.
     *
     * @memberof BaseQuery
     */
    public type = {} as any;

    /**
     * GraphQL arguments.
     *
     * @memberof BaseQuery
     */
    public args = {};

    /**
     * Before hook of query.
     *
     * @param {Args} args Query arguments
     * @param {Context<Args>} _context Execution context
     * @returns {Promise<Args>} Promise of arguments
     * @memberof IBaseQuery
     */
    public before(args: Args, _context: Context<Args>): Promise<Args> {
        Log.verbose(`Graphql default before hook:`);
        Log.verbose(`args: ${JSON.stringify(args)}`);
        return Promise.resolve(args);
    }

    /**
     * Execution hook of query.
     *
     * @param {Args} args Query arguments
     * @param {Context<Args>} _context Execution context
     * @param {GraphQLResolveInfo} _info Resolve information
     * @returns {Promise<Result>} Promise of result
     * @memberof IBaseQuery
     */
    public execute(args: Args, _context: Context<Args>, _info: GraphQLResolveInfo): Promise<Result> {
        Log.verbose(`Graphql default after hook`);
        Log.verbose(`args: ${JSON.stringify(args)}`);
        return Promise.resolve({} as any);
    }

    /**
     * After hook of query.
     *
     * @param {Result} result Query result
     * @param {Args} _args Query arguments
     * @param {Context<Args>} _context Execution context
     * @returns {Promise<Result>} Promise of result
     * @memberof IBaseQuery
     */
    public after(result: Result, _args: Args, _context: Context<Args>): Promise<Result> {
        Log.verbose(`Graphql after hook:`);
        Log.verbose(`result: ${JSON.stringify(result)}`);
        return Promise.resolve(result);
    }

    public resolve = async (
        _root: any,
        args: Args,
        context: Context<Args>,
        info: GraphQLResolveInfo,
    ): Promise<Result> => {
        // TODO: add user to context
        const user = context.user;

        // If user is not specified - user is a guest
        if (!user) {
            // Checking if guest has permission to execute request
            if (!_.find(this.permissions, (permission) => permission === UserRoles.GUEST)) {
                context.response.send(401);
                return Promise.reject('401 Unauthorized');
            }
        // If user is specified - check his permissions
        } else if (!UserUtil.hasRoles(user, this.permissions)) {
            context.response.send(401);
            return Promise.reject('401 Unauthorized');
        }

        const resultArgs = await this.before(_.cloneDeep(args), context);
        const result = await this.execute(resultArgs, context, info);
        await this.after(result, resultArgs, context);

        return result;
    }
}
