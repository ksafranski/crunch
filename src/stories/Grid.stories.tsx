import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '../index';

const meta = {
  title: 'Example/Grid',
  component: Grid,
  tags: ['autodocs'],
  args: {
    columns: 5,
  },
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const gridCellExampleStyle = {
  backgroundColor: '#ececec',
  border: '1px solid #ccc',
  padding: '1rem',
};

export const Primary: Story = {
  args: {
    columns: 3,
  },
  render: args => {
    return (
      <Grid {...args}>
        <Grid.Cell style={gridCellExampleStyle}>foo</Grid.Cell>
        <Grid.Cell style={gridCellExampleStyle}>foo</Grid.Cell>
        <Grid.Cell style={gridCellExampleStyle}>foo</Grid.Cell>
        <Grid.Cell style={gridCellExampleStyle}>foo</Grid.Cell>
        <Grid.Cell style={gridCellExampleStyle}>foo</Grid.Cell>
      </Grid>
    );
  },
};
