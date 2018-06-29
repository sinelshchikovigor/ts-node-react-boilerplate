import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Grid, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import {User} from 'common/models';
import {Input, Button, Label, Form, Row, ButtonTypes} from 'www/components';
import {Page} from 'www/containers';
import {Auth} from 'www/core';
import {RequestUtil} from 'www/utils';

interface ILoginProps extends RouteComponentProps<any> {}

interface ILoginState {
    login: string;
    password: string;
}

/**
 * Login page.
 *
 * @export
 * @class Login
 * @extends {React.Component<ILoginProps, ILoginState>}
 */
export class LoginComponent extends React.Component<ILoginProps, ILoginState> {
    public state: ILoginState = {
        login: '',
        password: '',
    };

    public onLoginFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        RequestUtil.fetch<User | null>('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password,
            }),
        }).then((user) => {
            Auth.setUser(user);
            this.props.history.push('/');
        }).catch((error) => {
            throw new Error(error);
        });
    }

    public onLoginChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;

        this.setState({
            ...this.state,
            login: value,
        });
    }

    public onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;

        this.setState({
            ...this.state,
            password: value,
        });
    }

    public render() {
        return (
            <Page>
                <Grid fluid>
                    <Row>
                        <Col lgOffset={3} lg={6}>
                            <Form onSubmit={this.onLoginFormSubmit} >
                                <Row>
                                    <Col lg={12} md={12}>
                                        <Label htmlFor='login'>Login:</Label>
                                        <Input
                                            id='login'
                                            type='text'
                                            placeholder='Enter your username'
                                            onChange={this.onLoginChange}
                                            autoFocus
                                            autoComplete='off'
                                            required
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={12} md={12}>
                                        <Label htmlFor='password'>Password:</Label>
                                        <Input
                                            id='password'
                                            type='password'
                                            placeholder='Enter your password'
                                            onChange={this.onPasswordChange}
                                            autoComplete='off'
                                            required
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6} md={6}>
                                        <Button
                                            className='login-buttons'
                                            id='reset-button'
                                            type='reset'
                                        >
                                            Reset
                                        </Button>
                                    </Col>

                                    <Col lg={6} md={6}>
                                        <Button
                                            className='login-buttons'
                                            id='login-button'
                                            type='submit'
                                            buttonType={ButtonTypes.Primary}
                                        >
                                            Enter
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Grid>
            </Page>
        );
    }
}

export const Login = styled(LoginComponent)``;
