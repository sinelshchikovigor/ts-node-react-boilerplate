import * as React from 'react';
import * as ReactModal from 'react-modal';
import {Button, ButtonTypes} from 'www/components';

export interface IDialogProps extends ReactModal.Props {
    /**
     * Dialog content.
     *
     * @memberof IDialogProps
     */
    content: () => React.ReactNode;
    /**
     * Dialog cancel handler.
     *
     * @memberof IDialogProps
     */
    onCancel?: <T>(event: (MouseEvent | KeyboardEvent), close?: () => void) => Promise<T>;
    /**
     * Dialog confirm handler.
     *
     * @memberof IDialogProps
     */
    onConfirm?: <T>(event: (MouseEvent | KeyboardEvent), close?: () => void) => Promise<T>;
}

export interface IDialogState {
    /**
     * If dialog is visible on the screen.
     *
     * @type {boolean}
     * @memberof IDialogState
     */
    isOpen: boolean;
}

/**
 * Application base dialog.
 *
 * @export
 * @class DialogComponent
 * @extends {React.PureComponent<IDialogProps>}
 */
export class Dialog extends React.PureComponent<IDialogProps, IDialogState> {
    public state: IDialogState = {
        isOpen: this.props.isOpen,
    };

    public onConfirm = (event: (MouseEvent | KeyboardEvent)) => {
        this.props.onRequestClose && this.props.onRequestClose(event);

        if (this.props.onConfirm) {
            this.props.onConfirm(event, this.close);
        } else {
            this.close();
        }
    }

    public onCancel = (event: (MouseEvent | KeyboardEvent)) => {
        this.props.onRequestClose && this.props.onRequestClose(event);

        if (this.props.onCancel) {
            this.props.onCancel(event, this.close);
        } else {
            this.close();
        }
    }

    public close = () => {
        this.setState({
            ...this.state,
            isOpen: false,
        });
    }

    public renderFooter() {
        return (
            <>
                <Button
                    buttonType={ButtonTypes.Primary}
                    onClick={this.onConfirm as any}
                >
                    Confirm
                </Button>

                <Button
                    buttonType={ButtonTypes.Secondary}
                    onClick={this.onCancel as any}
                >
                    Cancel
                </Button>
            </>
        );
    }

    public render() {
        return (
            <ReactModal
                isOpen={this.state.isOpen}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
                onRequestClose={this.onCancel}
                {...this.props}
            >
                {this.props.content()}
                {this.renderFooter()}
            </ReactModal>
        );
    }
}
