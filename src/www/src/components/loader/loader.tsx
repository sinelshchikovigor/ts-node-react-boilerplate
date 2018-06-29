import * as React from 'react';
import styled from 'styled-components';

export interface ILoaderProps<Result, Error> {
    /**
     * Loader content.
     *
     * @memberof ILoaderProps
     */
    content: (result?: Result | null, error?: Error | null) => React.ReactNode;
    /**
     * Load tasks.
     *
     * @memberof ILoaderProps
     */
    load: () => Promise<Result>;
}

export interface ILoaderState<Result, Error> {
    /**
     * If data is loading.
     *
     * @type {boolean}
     * @memberof ILoaderState
     */
    isLoading: boolean;
    /**
     * Load result.
     *
     * @type {(Result | null)}
     * @memberof ILoaderState
     */
    result: Result | null;
    /**
     * Load error.
     *
     * @type {(Error | null)}
     * @memberof ILoaderState
     */
    error: Error | null;
}

/**
 * Loader component.
 *
 * @export
 * @class LoaderComponent
 * @extends {React.PureComponent<ILoaderProps<Result, Error>, ILoaderState<Result, Error>>}
 * @template Result
 * @template Error
 */
export class LoaderComponent<Result, Error> extends React.PureComponent<
    ILoaderProps<Result, Error>,
    ILoaderState<Result, Error>
> {
    public state: ILoaderState<any, any> = {
        isLoading: true,
        result: null,
        error: null,
    };

    public componentDidMount() {
        this.props.load()
            .then((result) => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    result,
                    error: null,
                });

                return result;
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    result: null,
                    error,
                });

                throw new Error(error);
            });
    }

    public render() {
        if (this.state.isLoading) {
            return 'Loading...';
        } else {
            return this.props.content ? this.props.content(this.state.result, this.state.error) : null;
        }
    }
}

export const Loader = styled(LoaderComponent)``;
