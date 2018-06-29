import * as React from 'react';
import styled from 'styled-components';
import {FontSizes, Fonts} from 'common/styles';

export interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * Label component.
 *
 * @export
 * @class Label
 * @extends {React.PureComponent<ILabelProps>}
 */
export class LabelComponent extends React.PureComponent<ILabelProps> {
    public render() {
        return (
            <label {...this.props}>{this.props.children}</label>
        );
    }
}

export const Label = styled(LabelComponent)`
    font-size: ${FontSizes.Medium};
    font-family: ${Fonts.Secondary};
    padding-bottom: 10px;
    display: inline-block;
`;
