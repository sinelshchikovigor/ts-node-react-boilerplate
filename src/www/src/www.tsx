import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router-dom';
import * as ReactModal from 'react-modal';
import {ToastContainer} from 'react-toastify';
import {User} from 'common/models';
import {Dialog} from 'www/components';
import {Home, Login, NotFound} from 'www/views';
import {Modals, History} from 'www/core';

import 'www/styles/reset';

export const REACT_ROOT_ID = 'root';

export interface IApplicationState {
    modals: Modals[];
    user: User | null;
}

/**
 * Application component.
 *
 * @export
 * @class WWW
 * @extends {React.Component<{}, IApplicationState>}
 */
export class WWW extends React.Component<{}, IApplicationState> {
    public static init() {
        const root = document.createElement('div');
        root.id = REACT_ROOT_ID;
        document.body.appendChild(root);
        ReactDOM.render(<WWW /> as any, document.querySelector(`#${REACT_ROOT_ID}`));
        ReactModal.setAppElement(`#${REACT_ROOT_ID}`);
    }

    public static setState(state: IApplicationState) {
        WWW.instance.setState(state);
    }

    public static getState() {
        return WWW.instance.state;
    }

    private static instance: WWW;

    public state: IApplicationState = {
        modals: [],
        user: null,
    };

    constructor(props: {}) {
        super(props);
        WWW.instance = this;
    }

    public onModalConfirm = (onConfirm?: (data?: any) => void) => (data: any) => {
        Modals.hideAll();
        onConfirm && onConfirm(data);
    }

    public onModalCancel = (onCancel?: (data?: any) => void) => (data: any) => {
        Modals.hideAll();
        onCancel && onCancel(data);
    }

    public renderNotifications(): React.ReactNode {
        return (
            <ToastContainer />
        );
    }

    public renderModals(): React.ReactNode {
        return this.state.modals.map((modal) => {
            return (
                <Dialog
                    style={modal.style || {} as any}
                    key={modal.id}
                    isOpen
                    onCancel={this.onModalCancel(modal.onCancel) as any}
                    onConfirm={this.onModalConfirm(modal.onConfirm) as any}
                    content={modal.content}
                />
            );
        });
    }

    public render() {
        return (
            <>
                <Router history={History.get()}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='*' component={NotFound} />
                    </Switch>
                </Router>
                {this.renderNotifications()}
                {this.renderModals()}
            </>
        );
    }
}

WWW.init();
