import React from 'react';
global.React = React;
import { shallow } from 'enzyme';

import { Grid } from '../../src/components/Grid';

describe('Grid', () => {
  it('renders without crashing', () => {
    shallow(
      <Grid columns={3}>
        <Grid.Cell>A</Grid.Cell>
        <Grid.Cell>B</Grid.Cell>
        <Grid.Cell>C</Grid.Cell>
      </Grid>
    );
    expect(true).toBe(true);
  });
});
