import React from 'react';
global.React = React;
import { shallow } from 'enzyme';

import { Text } from '../../src/components/Text';

describe('Text', () => {
  it('renders without crashing', () => {
    shallow(<Text>Test</Text>);
    expect(true).toBe(true);
  });
});
