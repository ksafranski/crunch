import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../index';
import { useEffect, useRef } from 'react';

const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    text: 'Example text element',
    isHelpText: false,
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isHelpText: false,
  },
  render: args => {
    const ref = useRef(null);
    useEffect(() => {
      console.log(ref.current);
    }, []);
    return (
      <Text ref={ref} isHelpText={args.isHelpText}>
        {args.text || 'Example Text Element'}
      </Text>
    );
  },
};
