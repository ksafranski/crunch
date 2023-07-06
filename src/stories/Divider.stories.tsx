import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../index';

const meta = {
  title: 'Example/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Content: Story = {
  args: {
    children: 'Divider Text',
  },
};
