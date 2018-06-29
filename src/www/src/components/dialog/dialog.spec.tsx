import * as React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {Dialog, IDialogProps} from './';

describe('Dialog', () => {
    it('Should render a default dialog with content', () => {
        const dialog = shallow<IDialogProps>(
            <Dialog
                isOpen
                content={() => 'Test'}
            />,
        );

        expect(dialog).to.exist;
    });
});
