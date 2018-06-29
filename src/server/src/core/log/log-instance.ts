import * as path from 'path';
import * as winston from 'winston';
import * as RotateDaily from 'winston-daily-rotate-file';
import {Config} from '../';
import {LogLevels} from './log-levels';

/**
 * Logs directory.
 *
 * @constant
 */
const LOGS_DIR = path.resolve(__dirname, '../../logs');
/**
 * Date format used for file logging.
 *
 * @constant
 */
const DATE_FORMAT = () => (new Date()).toLocaleTimeString();
/**
 * Date pattern used for file logging.
 *
 * @constant
 */
const DATE_PATTERN = 'yyyy-MM-dd';

export const logInstance = new (winston.Logger)({
    transports: [
        new winston.transports.Console({
            name: 'info-console-logger',
            colorize: true,
            timestamp: DATE_FORMAT,
            level: LogLevels.Info,
        }),
        new winston.transports.Console({
            name: 'debug-console-logger',
            colorize: true,
            timestamp: DATE_FORMAT,
            level: LogLevels.Debug,
        }),
        new winston.transports.Console({
            name: 'verbose-console-logger',
            colorize: true,
            timestamp: DATE_FORMAT,
            level: LogLevels.Verbose,
        }),
        new winston.transports.Console({
            name: 'error-console-logger',
            colorize: true,
            timestamp: DATE_FORMAT,
            level: LogLevels.Error,
        }),
        new winston.transports.Console({
            name: 'warn-console-logger',
            colorize: true,
            timestamp: DATE_FORMAT,
            level: LogLevels.Warn,
        }),
    ],
});

if (Config.get('useFileLogging')) {
    winston.add(RotateDaily, {
        name: 'info-file-logger',
        filename: `${LOGS_DIR}/info/-info.log`,
        timestamp: DATE_FORMAT,
        datePattern: DATE_PATTERN,
        prepend: true,
        level: LogLevels.Info,
    });

    winston.add(RotateDaily, {
        name: 'verbose-file-logger',
        filename: `${LOGS_DIR}/verbose/-info.log`,
        timestamp: DATE_FORMAT,
        datePattern: DATE_PATTERN,
        prepend: true,
        level: LogLevels.Verbose,
    });

    winston.add(RotateDaily, {
        name: 'warn-file-logger',
        filename: `${LOGS_DIR}/warnings/-warning.log`,
        timestamp: DATE_FORMAT,
        datePattern: DATE_PATTERN,
        prepend: true,
        level: LogLevels.Warn,
    });

    winston.add(RotateDaily, {
        name: 'error-file-logger',
        filename: `${LOGS_DIR}/errors/-error.log`,
        timestamp: DATE_FORMAT,
        datePattern: DATE_PATTERN,
        prepend: true,
        level: LogLevels.Error,
    });
}
