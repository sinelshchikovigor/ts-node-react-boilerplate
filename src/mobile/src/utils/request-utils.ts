/**
 * Request util.
 *
 * @export
 * @abstract
 * @class RequestUtil
 */
export abstract class RequestUtil {
    /**
     * Fetch util.
     *
     * @static
     * @template T
     * @param {string} path Request path.
     * @param {RequestInit} [init] Fetch parameters.
     * @returns {Promise<T>}
     * @memberof RequestUtil
     */
    public static fetch<T>(path: string, init?: RequestInit): Promise<T> {
        return fetch(path, init)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                return res;
            })
            .then((res: Response) => {
                return res.json();
            });
    }
}
