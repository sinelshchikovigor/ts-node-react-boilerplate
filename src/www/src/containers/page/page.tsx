import * as React from 'react';
import {Header} from '..';

/**
 * Application page.
 *
 * @export
 * @class Page
 * @extends {React.PureComponent}
 */
export class Page extends React.PureComponent {
    public render() {
        return (
            <>
                <Header />
                {this.props.children}
            </>
        );
    }
}
