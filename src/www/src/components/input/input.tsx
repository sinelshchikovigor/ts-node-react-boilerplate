import styled from 'styled-components';
import {darken} from 'polished';
import {FontSizes, Fonts, Colors} from 'common/styles';
import {InputComponent} from './';

const getHoverBorderColor = () => {
    return darken(0.1, Colors.Grey);
};

/**
 * Input component. Includes default input and masked input.
 *
 * @export
 * @class Input
 * @extends {React.PureComponent<IInputProps>}
 */
export const Input = styled(InputComponent)`
    width: 100%;
    height: 40px;
    font-size: ${FontSizes.Medium};
    padding: 0 10px;
    font-family: ${Fonts.Secondary};
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid ${Colors.Grey};

    &:hover {
        border: 1px solid ${getHoverBorderColor};
    }
`;
