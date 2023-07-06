import React from 'react';
global.React = React;
import { shallow } from 'enzyme';

import { Input } from '../../src/components/Input';

describe('Input', () => {
  it('renders without crashing', () => {
    shallow(<Input value='Test' />);
    expect(true).toBe(true);
  });
});
