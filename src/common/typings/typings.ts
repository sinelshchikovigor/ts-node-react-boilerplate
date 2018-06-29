/** Common typings namespace. */
export namespace Common {
    /**
     * Error format which comes from server.
     *
     * @export
     * @interface IResponseError
     */
    export interface IResponseError {
        /**
         * Error code.
         *
         * @memberof IResponseError
         */
        code: string;
        /**
         * Error short message which is shown for client.
         *
         * @memberof IResponseError
         */
        message: string;
        /**
         * Error description with extra information for developers.
         *
         * @memberof IResponseError
         */
        description?: string;
    }

    /**
     * Notification types which come from server.
     *
     * @export
     */
    export type INotificationType = 'ERROR' | 'INFO' | 'SUCCESS';

    /**
     * Notification which comes from server.
     *
     * @export
     * @interface IResponseNotification
     */
    export interface IResponseNotification {
        /**
         * Notification type.
         *
         * @memberof IResponseNotification
         */
        type: INotificationType;
        /**
         * Notification message.
         *
         * @memberof IResponseNotification
         */
        message: string;
    }

    /**
     * Server response format.
     *
     * @export
     * @interface IResponse
     * @template T Response type
     */
    export interface IResponse<T> {
        /**
         * Response data.
         *
         * @type {T}
         * @memberof IResponse
         */
        data?: T;
        /**
         * Indicates if response contains errors.
         *
         * @memberof IResponse
         */
        hasErrors: boolean;
        /**
         * List of server errors.
         *
         * @memberof IResponse
         */
        errors: IResponseError[];
        /**
         * List of server notifications.
         *
         * @memberof IResponse
         */
        notifications: IResponseNotification[];
    }
}
