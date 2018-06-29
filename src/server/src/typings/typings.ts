/**
 * Server configuration.
 *
 * @export
 * @interface IConfig
 */
export interface IConfig {
    /**
     * Path to configuration.
     *
     * @default undefined
     * @memberof IConfig
     */
    config?: string;
    /**
     * Server port.
     *
     * @default 4000
     * @memberof IConfig
     */
    port?: number;
    /**
     * Option for enabling file logging.
     *
     * @default false
     * @memberof IConfig
     */
    useFileLogging?: boolean;
    /**
     * Enables 'verbose' log messages.
     *
     * @default false
     * @memberof IConfig
     */
    verbose?: boolean;
    /**
     * Url for documentation.
     *
     * @default '/docs'
     * @memberof IConfig
     */
    docsUrl?: string;
    /**
     * DB username.
     * Passed though 'process.env'.
     *
     * @type {string}
     * @memberof IConfig
     */
    dbUsername?: string;
    /**
     * DB password.
     * Passed though 'process.env'.
     *
     * @type {string}
     * @memberof IConfig
     */
    dbPassword?: string;
    /**
     * DB host.
     * Passed though 'process.env'.
     *
     * @type {string}
     * @memberof IConfig
     */
    dbHost?: string;
    /**
     * DB name.
     * Passed though 'process.env'.
     *
     * @type {string}
     * @memberof IConfig
     */
    dbName?: string;
    /**
     * Database title.
     * Passed though 'process.env'.
     *
     * @type {string}
     * @memberof IConfig
     */
    dbDatabase?: string;
}
