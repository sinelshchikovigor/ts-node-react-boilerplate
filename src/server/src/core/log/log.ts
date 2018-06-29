import {Config} from '../';
import {logInstance} from './log-instance';

/**
 * Logger component required for logging. Can log to console and to file.
 * Uses winston as logger library.
 *
 * @class
 * @see winston https://github.com/winstonjs/winston
 */
export abstract class Log {
    /**
     * Logs "info" message to console and to file if file logging is enabled.
     *
     * @static
     * @param message Log message
     */
    public static info(message: string) {
        logInstance.info(message);
    }

    /**
     * Logs "warn" message to console and to file if file logging is enabled.
     *
     * @static
     * @param message Log message
     */
    public static warn(message: string) {
        logInstance.warn(message);
    }

    /**
     * Logs "error" message to console and to file if file logging is enabled.
     *
     * @static
     * @param message Log message
     */
    public static error(message: string) {
        logInstance.error(message);
    }

    /**
     * Logs "debug" message to console and to file if file logging is enabled.
     *
     * @static
     * @param message Log message
     */
    public static debug(message: string) {
        logInstance.debug(message);
    }

    /**
     * Logs "verbose" message to console and to file if file logging is enabled.
     * Creates logs only if "verbose" option is set.
     *
     * @static
     * @param message Log message
     */
    public static verbose(message: string) {
        if (Config.get('verbose')) {
            logInstance.verbose(message);
        }
    }
}
