import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Input} from './';

storiesOf('Input', module)
    .add('Default', () => {
        return <Input />;
    })
    .add('Masked', () => {
        return <Input mask='+7 (111) 111 11 11' />;
    });
