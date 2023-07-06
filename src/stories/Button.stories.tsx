import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Button text='Button' />;
  },
};

export const Children: Story = {
  args: {
    children: 'Button',
  },
  render: args => {
    return <Button>{args.children}</Button>;
  },
};
