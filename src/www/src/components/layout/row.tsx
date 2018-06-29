import * as React from 'react';
import {Row as RowLib, RowProps} from 'react-flexbox-grid';
import styled from 'styled-components';

export class RowComponent extends React.PureComponent<RowProps> {
    public render() {
        return (
            <RowLib {...this.props}>{this.props.children}</RowLib>
        );
    }
}

export const Row = styled(RowComponent)`
    margin-top: 20px;
`;
