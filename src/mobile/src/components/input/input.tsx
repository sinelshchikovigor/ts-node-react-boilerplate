import * as React from 'react';
import {TextInput, TextInputProperties} from 'react-native';

export interface IInputProps extends TextInputProperties {}

export class Input extends React.Component<IInputProps> {
    public render() {
        return (
            <TextInput {...this.props} />
        );
    }
}
