import * as React from 'react';
import {Button as NativeButton, ButtonProperties} from 'react-native';

export interface IButtonProps extends ButtonProperties {}

export class Button extends React.Component<IButtonProps> {
    public render() {
        return (
            <NativeButton {...this.props} />
        );
    }
}
