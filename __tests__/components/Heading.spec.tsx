import React from 'react';
global.React = React;
import { shallow } from 'enzyme';

import { Heading } from '../../src/components/Heading';

describe('Heading', () => {
  it('renders without crashing', () => {
    shallow(<Heading level='h1'>Test</Heading>);
    expect(true).toBe(true);
  });
});
