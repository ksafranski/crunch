import React from 'react';
global.React = React;
import { shallow } from 'enzyme';

import { Button } from '../../src/components/Button';

describe('Button', () => {
  it('renders without crashing', () => {
    shallow(<Button>Test</Button>);
    expect(true).toBe(true);
  });
});
