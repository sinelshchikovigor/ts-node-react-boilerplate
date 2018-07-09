import * as _ from 'lodash';
import {ILocaleSchema} from './locale-schema';
import * as Languages from './languages';

/**
 * Locale module which helps to get phrase on current language.
 *
 * @export
 * @class Locale
 */
export class Locale {
    /**
     * Returns phrase using current localization settings.
     *
     * @static
     * @template K
     * @param {K} key
     * @param {Languages.Languages} [locale]
     * @returns {ILocaleSchema[K]}
     * @memberof Locale
     */
    public static get<K extends keyof ILocaleSchema>(key: K, locale?: Languages.Languages): ILocaleSchema[K] {
        return _.get(Languages[locale || 'en'], key);
    }
}
