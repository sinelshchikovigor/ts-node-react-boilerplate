import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Button, ButtonTypes} from './';

storiesOf('Button', module)
    .add('Default', () => {
        return (
            <>
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button buttonType={ButtonTypes.Primary}>Primary</Button>
                <Button buttonType={ButtonTypes.Secondary}>Secondary</Button>
                <Button buttonType={ButtonTypes.Text}>Text</Button>
                <Button buttonType={ButtonTypes.Link}>Link</Button>
            </>
        );
    });
