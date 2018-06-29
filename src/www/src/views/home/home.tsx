import * as React from 'react';
import {List, Loader} from 'www/components';
import {Page} from 'www/containers';

/**
 * Home page component.
 *
 * @export
 * @class Home
 * @extends {React.Component}
 */
export class Home extends React.Component {
    public render() {
        return (
            <Page>
                <Loader
                    load={() => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                resolve({} as any);
                            }, 5000);
                        });
                    }}
                    content={() => {
                        return (
                            <List
                                getItems={() => [{}]}
                                renderItem={() => 'Item'}
                                getItemKey={() => '1'}
                            />
                        );
                    }}
                />
            </Page>
        );
    }
}
