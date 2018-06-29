import * as React from 'react';
import {View} from 'react-native';
import {Input, Button} from '../../components';

export interface ILoginProps {}

export class Login extends React.Component<ILoginProps> {
    public render() {
        return (
            <View>
                <Input
                    placeholder='Login'
                    keyboardType='default'
                    autoFocus
                />
                <Input
                    placeholder='Password'
                    keyboardType='default'
                />
                <Button title='Login' onPress={() => ({})}/>
            </View>
        );
    }
}
