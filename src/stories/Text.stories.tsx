import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../index';

const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    text: 'Example text element',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'tertiary',
        'danger',
        'warning',
        'success',
      ],
    },
    ref: {
      control: false,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'default',
    children: 'Example Text Element',
  },
};
