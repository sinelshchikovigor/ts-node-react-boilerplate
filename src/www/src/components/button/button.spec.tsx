import * as React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {Button, IButtonProps, ButtonTypes} from './';

describe('Button', () => {
    it('Should render a default button without text', () => {
        const button = shallow<IButtonProps>(<Button />);

        expect(button.find('button')).to.exist;
        expect(button.prop('buttonType')).to.equal(ButtonTypes.Default);
    });

    it('Should render a default button with text', () => {
        const button = shallow<IButtonProps>(<Button>Text</Button>);
        expect(button.contains('Text')).to.be.true;
    });

    it('Should render a primary button with text', () => {
        const button = shallow<IButtonProps>(
            <Button buttonType={ButtonTypes.Primary}>Primary</Button>,
        );

        expect(button.contains('Primary')).to.be.true;
        expect(button.prop('buttonType')).to.equal(ButtonTypes.Primary);
    });

    it('Should render a secondary button with text', () => {
        const button = shallow<IButtonProps>(
            <Button buttonType={ButtonTypes.Secondary}>Secondary</Button>,
        );

        expect(button.contains('Secondary')).to.be.true;
        expect(button.prop('buttonType')).to.equal(ButtonTypes.Secondary);
    });

    it('Should render a danger button with text', () => {
        const button = shallow<IButtonProps>(
            <Button buttonType={ButtonTypes.Danger}>Danger</Button>,
        );

        expect(button.contains('Danger')).to.be.true;
        expect(button.prop('buttonType')).to.equal(ButtonTypes.Danger);
    });

    it('Should render a text button with text', () => {
        const button = shallow<IButtonProps>(
            <Button buttonType={ButtonTypes.Text}>Text</Button>,
        );

        expect(button.contains('Text')).to.be.true;
        expect(button.prop('buttonType')).to.equal(ButtonTypes.Text);
    });

    it('Should render a link button with text', () => {
        const button = shallow<IButtonProps>(
            <Button buttonType={ButtonTypes.Link}>Link</Button>,
        );

        expect(button.contains('Link')).to.be.true;
        expect(button.prop('buttonType')).to.equal(ButtonTypes.Link);
    });

    it('Should render a disabled default button', () => {
        const button = shallow<IButtonProps>(
            <Button disabled>Disabled</Button>,
        );

        expect(button.contains('Disabled')).to.be.true;
        expect(button.prop('buttonType')).to.equal(ButtonTypes.Default);
        expect(button.prop('disabled')).to.be.true;
    });
});
