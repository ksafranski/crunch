import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      control: { type: 'string', description: 'onChange Event Handler' },
    },
    ref: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button',
  },
};

export const Children: Story = {
  args: {
    children: 'Button',
  },
};
