import * as React from 'react';
import styled from 'styled-components';
import {IDefaultProps} from 'www/typings';
import {Colors, Fonts, FontSizes} from 'common/styles';
import {Auth, Notifications, Modals} from 'www/core';
import {RequestUtil} from 'www/utils';
import {Button, ButtonTypes, Link} from 'www/components';

export interface IHeaderProps extends IDefaultProps {}

/**
 * Application header.
 *
 * @export
 * @class HeaderComponent
 * @extends {React.Component<IHeaderProps>}
 */
export class HeaderComponent extends React.Component<IHeaderProps> {
    public onLogoutClick = () => {
        Modals.showStyled(this.renderLogoutDialog, {}, () => {
            RequestUtil
                .fetch<void>('/logout')
                .then(() => {
                    Auth.setUser(null);
                    Notifications.info(`You've successfully logged out`);
                });
        });
    }

    public renderLogoutDialog() {
        return (
            <div>
                Are you sure?
            </div>
        );
    }

    public renderLogin() {
        return (
            <div>
                <Link to='/login'>
                    <Button
                        id='login-button'
                        className='login-button'
                        buttonType={ButtonTypes.Text}
                    >
                        Login
                    </Button>
                </Link>
            </div>
        );
    }

    public renderLogout() {
        const user = Auth.user;
        const firstName = user && user.firstName || '';
        const lastName = user && user.lastName || '';
        const username = `${firstName} ${lastName}`;

        return (
            <div>
                <span className='username'>{username}</span>
                <Button
                    id='logout-button'
                    className='header-button'
                    buttonType={ButtonTypes.Text}
                    onClick={this.onLogoutClick}
                >
                    Logout
                </Button>
            </div>
        );
    }

    public render() {
        return (
            <header className={this.props.className}>
                <Link className='header-title' to='/'>Node-React</Link>
                {Auth.isLoggedIn() ? this.renderLogout() : this.renderLogin()}
            </header>
        );
    }
}

export const Header = styled(HeaderComponent) `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    background-color: ${Colors.White};

    .header-title {
        font-size: 2rem;
        color: ${Colors.Clay};
        font-family: ${Fonts.Primary};
        text-transform: uppercase;
        line-height: 4rem;
    }

    .header-button {
        padding: 0px 50px;
        width: 20rem;
    }

    .login-button {
        margin: 0px 50px;
    }

    .username {
        color: ${Colors.Clay};
        font: ${Fonts.Secondary};
        font-size: ${FontSizes.Medium};
        padding-right: 10px;
    }
`;
