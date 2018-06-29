import styled from 'styled-components';
import {darken} from 'polished';
import {Colors, Fonts, FontSizes} from 'common/styles';
import {IButtonProps, ButtonComponent} from './button.component';
import {ButtonTypes} from './button.const';

const getButtonWidth = (props: IButtonProps) => {
    if (props.buttonType === ButtonTypes.Text) {
        return 'auto';
    } else if (props.buttonType === ButtonTypes.Link) {
        return 'auto';
    }

    return '100%';
};

const getButtonPadding = (props: IButtonProps) => {
    if (props.buttonType === ButtonTypes.Text) {
        return '5px 0';
    } else if (props.buttonType === ButtonTypes.Link) {
        return '5px 0';
    }

    return '5px';
};

const getButtonBackgroundColor = (props: IButtonProps): Colors => {
    if (props.buttonType === ButtonTypes.Default || !props.buttonType) {
        return Colors.White;
    } else if (props.buttonType === ButtonTypes.Primary) {
        return Colors.Blue;
    } else if (props.buttonType === ButtonTypes.Secondary) {
        return Colors.Clay;
    } else if (props.buttonType === ButtonTypes.Danger) {
        return Colors.Red;
    } else if (props.buttonType === ButtonTypes.Text) {
        return Colors.Transparent;
    } else if (props.buttonType === ButtonTypes.Link) {
        return Colors.Transparent;
    }

    return Colors.White;
};

const getButtonTextColor = (props: IButtonProps): Colors => {
    if (props.buttonType === ButtonTypes.Primary) {
        return Colors.White;
    } else if (props.buttonType === ButtonTypes.Secondary) {
        return Colors.White;
    } else if (props.buttonType === ButtonTypes.Danger) {
        return Colors.White;
    } else if (props.buttonType === ButtonTypes.Link) {
        return Colors.Blue;
    }

    return Colors.Black;
};

const getFocusedBackgroundColor = (props: IButtonProps) => {
    return darken(0.1, getButtonBackgroundColor(props));
};

const getButtonBorderColor = (props: IButtonProps): Colors => {
    if (props.buttonType === ButtonTypes.Default || !props.buttonType) {
        return Colors.Grey;
    }

    return Colors.Transparent;
};

const getHoverTextDecoration = (props: IButtonProps) => {
    if (props.buttonType === ButtonTypes.Text || props.buttonType === ButtonTypes.Link) {
        return 'underline';
    }

    return 'none';
};

const getHoverBorderColor = (props: IButtonProps) => {
    if (props.buttonType === ButtonTypes.Default || !props.buttonType) {
        return darken(0.1, Colors.Grey);
    }

    return Colors.Transparent;
};

export const Button = styled(ButtonComponent)`
    width: ${getButtonWidth};
    height: 40px;
    cursor: pointer;
    font-size: ${FontSizes.Medium};
    background-color: ${getButtonBackgroundColor};
    color: ${getButtonTextColor};
    padding: ${getButtonPadding};
    box-sizing: border-box;
    font-family: ${Fonts.Secondary};
    border: 1px solid ${getButtonBorderColor};
    box-sizing: border-box;

    :disabled {
        color: ${Colors.Grey};
        background-color: ${Colors.White};
        border: 1px solid ${Colors.Grey};
    }

    :hover {
        background-color: ${getFocusedBackgroundColor};
        text-decoration: ${getHoverTextDecoration};
        border: 1px solid ${getHoverBorderColor};
    }
`;
