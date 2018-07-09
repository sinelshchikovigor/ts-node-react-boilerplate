import * as React from 'react';
import {View, TextInputStatic} from 'react-native';
import {Input, Button} from '../../components';
import {Auth} from '../../core';

export interface ILoginState {
    username: string;
    password: string;
    errorMessage: string | null;
}

export class Login extends React.Component<{}, ILoginState> {
    public state = {
        username: '',
        password: '',
        errorMessage: null,
    };

    public onUsernameChange = (event: React.SyntheticEvent<TextInputStatic>) => {
        const username: string = (event.target as any).value || '';

        this.setState({
            ...this.state,
            username,
        });
    }

    public onPasswordChange = (event: React.SyntheticEvent<TextInputStatic>) => {
        const password: string = (event.target as any).value || '';

        this.setState({
            ...this.state,
            password,
        });
    }

    public onLoginPress = async () => {
        const {username, password} = this.state;

        try {
            await Auth.login(username, password);
        } catch (error) {
            this.setState({
                ...this.state,
                password: '',
                errorMessage: error,
            });
        }
    }

    public render() {
        return (
            <View>
                <Input
                    onChange={this.onUsernameChange as any}
                    placeholder='Username'
                    keyboardType='default'
                    autoFocus
                />
                <Input
                    onChange={this.onPasswordChange as any}
                    placeholder='Password'
                    keyboardType='default'
                />
                <Button title='Login' onPress={this.onLoginPress}/>
            </View>
        );
    }
}
