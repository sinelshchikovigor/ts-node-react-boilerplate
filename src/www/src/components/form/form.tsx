import * as React from 'react';
import styled from 'styled-components';

export interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

/**
 * Application form component.
 *
 * @export
 * @class FormComponent
 * @extends {React.PureComponent<IFormProps>}
 */
export class FormComponent extends React.PureComponent<IFormProps> {
    public render() {
        return (
            <form {...this.props}>{this.props.children}</form>
        );
    }
}

export const Form = styled(FormComponent)``;
