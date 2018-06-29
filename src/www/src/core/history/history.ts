import {createBrowserHistory, History as HistoryType} from 'history';

/**
 * Application history module. Manages application routing.
 *
 * @export
 * @abstract
 * @class History
 */
export abstract class History {
    /**
     * Returns browser history.
     *
     * @static
     * @returns Browser history.
     * @memberof History
     */
    public static get() {
        return History.instance;
    }

    /**
     * Browser history instance.
     *
     * @private
     * @static
     * @type {HistoryType}
     * @memberof History
     */
    private static instance: HistoryType = createBrowserHistory();
}
