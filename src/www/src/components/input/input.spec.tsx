import * as React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {Input} from './';

describe('Input', () => {
    it('Should render a component', () => {
        const input = shallow(<Input />);
        expect(input.find('input')).to.exist;
    });
});
