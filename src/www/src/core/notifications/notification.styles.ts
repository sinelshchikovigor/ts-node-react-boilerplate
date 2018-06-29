import {injectGlobal} from 'styled-components';
import {Fonts, FontSizes} from 'common/styles';

injectGlobal`
    .notification {
        font-family: ${Fonts.Secondary};
        font-size: ${FontSizes.Medium};
    }
`;
