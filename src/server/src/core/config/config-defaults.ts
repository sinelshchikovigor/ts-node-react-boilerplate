import {IConfig} from 'server/typings';

/**
 * Default values for application configuration.
 *
 * @constant
 */
export const configDefaults: IConfig = {
    port: 4000,
    useFileLogging: false,
    verbose: false,
    docsUrl: '/docs',
};
