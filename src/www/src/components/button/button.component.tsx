import * as React from 'react';
import * as _ from 'lodash';
import {IDefaultProps} from 'www/typings';
import {ButtonTypes} from './button.const';

export interface IButtonProps extends IDefaultProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button type.
     *
     * @default ButtonTypes.Default
     *
     * @type {ButtonTypes}
     * @memberof IButtonProps
     */
    buttonType?: ButtonTypes;
}

/**
 * Button component.
 *
 * @export
 * @class ButtonComponent
 * @extends {React.PureComponent<IButtonProps>}
 */
export class ButtonComponent extends React.PureComponent<IButtonProps> {
    public static defaultProps: Partial<IButtonProps> = {
        buttonType: ButtonTypes.Default,
    };

    public onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!this.props.disabled) {
            _.isFunction(this.props.onClick) && this.props.onClick(e);
        } else {
            return false;
        }
    }

    public render() {
        const props: React.ButtonHTMLAttributes<HTMLButtonElement> = _.omit(this.props, [
            'buttonType',
        ]);

        return (
            <button
                {...props}
                onClick={this.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}
