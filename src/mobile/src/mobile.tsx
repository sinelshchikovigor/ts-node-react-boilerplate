import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './core';
import {Navigator} from './views';

export class Mobile extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
