import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../index';

const meta = {
  title: 'Example/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    level: 'h1',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    level: 'h1',
  },
  render: args => {
    return (
      <Heading level={args.level}>
        {args.text || 'Example Heading Element'}
      </Heading>
    );
  },
};
