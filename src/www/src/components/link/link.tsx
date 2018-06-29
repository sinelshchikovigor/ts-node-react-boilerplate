import * as React from 'react';
import {Link as RouterLink, LinkProps} from 'react-router-dom';
import styled from 'styled-components';

export class LinkComponent extends React.PureComponent<LinkProps> {
    public render() {
        return (
            <RouterLink {...this.props} />
        );
    }
}

export const Link = styled(LinkComponent)``;
