import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../index';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    value: 'Example Input element',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'number',
        'password',
        'date',
        'time',
        'email',
        'tel',
        'url',
      ],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text',
  },
};
