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

export const Default: Story = {
  args: {
    columns: 3,
    children: new Array(5)
      .fill('')
      .map((_, idx: number) => (
        <Grid.Cell style={gridCellExampleStyle}>
          Cell {(idx + 1).toString()}
        </Grid.Cell>
      )),
  },
  render: args => {
    return <Grid {...args}>{args.children}</Grid>;
  },
};

export const Responsive: Story = {
  args: {
    columns: {
      small: 1,
      medium: 2,
      large: 2,
      xlarge: 3,
    },
    children: new Array(5)
      .fill('')
      .map((_, idx: number) => (
        <Grid.Cell style={gridCellExampleStyle}>
          Cell {(idx + 1).toString()}
        </Grid.Cell>
      )),
  },
  render: args => {
    return <Grid {...args}>{args.children}</Grid>;
  },
};
