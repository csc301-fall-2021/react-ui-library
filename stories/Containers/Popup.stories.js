import React from 'react';
import { storiesOf } from '@storybook/react';
import { Popup } from '../../src';

storiesOf('Popup', module).add(
    'with nothing',
    () => (
        <Popup
            left={10}
            top={10}
            width={40}
            height={30}
            popup={true}
            content="Content"
        />
    ),
    {},
);
