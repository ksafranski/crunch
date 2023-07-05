import React from 'react';
global.React = React;
import { shallow } from 'enzyme';

import { Divider } from '../../src/components/Divider';

describe('Divider', () => {
  it('renders without crashing', () => {
    shallow(<Divider>Test</Divider>);
    expect(true).toBe(true);
  });
});
