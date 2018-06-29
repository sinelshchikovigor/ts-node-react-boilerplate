import {createConnection, getManager, getRepository, ObjectType} from 'typeorm';
import 'reflect-metadata';
import {Log, Config} from '../';
import {Users} from '../../components';

/**
 * Component which works with DB. Uses 'typeorm' library inside.
 *
 * @see typeorm https://github.com/typeorm/typeorm
 *
 * @class
 */
export abstract class DB {
    /**
     * Initializes DB component. Creates connection with database.
     *
     * @static
     */
    public static init() {
        createConnection({
            name: Config.get('dbName'),
            type: 'postgres',
            host: Config.get('dbHost'),
            password: Config.get('dbPassword'),
            username: Config.get('dbUsername'),
            database: Config.get('dbDatabase'),
            schema: 'public',
            synchronize: true,
            entities: [
                Users,
            ],
        })
            .then(() => Log.info(`Database connected`))
            .catch((error) => Log.error(error));
    }

    /**
     * Returns DB connection manager.
     *
     * @static
     * @returns DB connection manager
     */
    public static get() {
        return getManager(Config.get('dbName'));
    }

    /**
     * Returns DB repository.
     *
     * @static
     * @template T Repository type
     * @param {string} repository Repository name
     * @returns DB repository
     * @memberof DB
     */
    public static getRepository<Entity>(target: ObjectType<Entity> | string) {
        return getRepository(target);
    }
}
