import * as React from 'react';
import * as _ from 'lodash';
import MaskedInput from 'react-input-mask';
import {IDefaultProps} from 'www/typings';

export interface IInputProps extends IDefaultProps, React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Input mask.
     *
     * @type {string}
     * @memberof InputProps
     */
    mask?: string;
}

export class InputComponent extends React.PureComponent<IInputProps> {
    public renderMaskedInput() {
        return (
            <MaskedInput
                {...this.props}
                mask={this.props.mask!}
            />
        );
    }

    public render() {
        if (this.props.mask) {
            return this.renderMaskedInput();
        }

        const props = _.omit(this.props, ['mask']);

        return (
            <input {...props} />
        );
    }
}
