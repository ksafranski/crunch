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
      label: { type: 'string' },
      options: [
        'text',
        'textarea',
        'number',
        'password',
        'date',
        'time',
        'email',
        'tel',
        'url',
      ],
    },
    onChange: {
      control: { type: 'string', description: 'onChange Event Handler' },
    },
    ref: {
      control: false,
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

export const Labeled: Story = {
  args: {
    type: 'text',
    required: true,
    label: 'Example Label',
  },
};
