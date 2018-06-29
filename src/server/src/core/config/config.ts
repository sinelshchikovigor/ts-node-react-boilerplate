import * as nconf from 'nconf';
import {IConfig} from 'server/typings';
import {configDefaults} from './config-defaults';

/**
 * Configuration utility. Uses nconf inside.
 *
 * @see nconf https://github.com/indexzero/nconf
 *
 * @class
 */
export abstract class Config {
    /**
     * Indicates if application is executed in production mode.
     *
     * @static
     * @memberof Config
     */
    public static readonly isProductionMode = process.env.NODE_ENV === 'production';
    /**
     * Indicates if application is executed in development mode.
     *
     * @static
     * @memberof Config
     */
    public static readonly isDevelopmentMode = process.env.NODE_ENV === 'development';

    /**
     * Configuration initialization.
     *
     * @static
     * @memberof Config
     */
    public static init() {
        nconf
            .defaults(configDefaults)
            .argv()
            .env();

        if (Config.get('config')) {
            nconf.file(Config.get('config'));
        }
    }

    /**
     * Returns configuration object. Returns configuration[key] if key is provided.
     *
     * @static
     * @param {keyof IConfig} [key] Configuration key
     * @returns Configuration object or configuration[key] value
     * @memberof Config
     */
    public static get(key?: keyof IConfig) {
        return key ? nconf.get(key) : nconf.get();
    }
}
