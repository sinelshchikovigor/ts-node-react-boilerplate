import {toast, ToastContent, ToastOptions} from 'react-toastify';

import './notification.styles';

/**
 * Notifications module.
 *
 * @export
 * @abstract
 * @class Notifications
 */
export abstract class Notifications {
    /**
     * Creates 'info' notification.
     *
     * @static
     * @param {ToastContent} content Notification content.
     * @param {ToastOptions} [options] Notification options.
     * @memberof Notifications
     */
    public static info(content: ToastContent, options?: ToastOptions) {
        toast.info(content, {
            ...Notifications.defaultOptions,
            ...options,
        });
    }

    /**
     * Creates 'success' notification.
     *
     * @static
     * @param {ToastContent} content Notification content.
     * @param {ToastOptions} [options] Notification options.
     * @memberof Notifications
     */
    public static success(content: ToastContent, options?: ToastOptions) {
        toast.success(content, {
            ...Notifications.defaultOptions,
            ...options,
        });
    }

    /**
     * Creates 'warn' notification.
     *
     * @static
     * @param {ToastContent} content Notification content.
     * @param {ToastOptions} [options] Notification options.
     * @memberof Notifications
     */
    public static warn(content: ToastContent, options?: ToastOptions) {
        toast.warn(content, {
            ...Notifications.defaultOptions,
            ...options,
        });
    }

    /**
     * Creates 'error' notification.
     *
     * @static
     * @param {ToastContent} content Notification content.
     * @param {ToastOptions} [options] Notification options.
     * @memberof Notifications
     */
    public static error(content: ToastContent, options?: ToastOptions) {
        toast.error(content, {
            ...Notifications.defaultOptions,
            ...options,
        });
    }

    /**
     * Notifications default options.
     *
     * @private
     * @static
     * @type {ToastOptions}
     * @memberof Notifications
     */
    private static defaultOptions: ToastOptions = {
        hideProgressBar: true,
        position: 'bottom-right',
    };
}
