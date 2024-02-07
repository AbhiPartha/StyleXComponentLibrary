import { h } from 'preact';
import Button from './Button';
import type { Meta, StoryObj } from '@storybook/preact';

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        size: {
          options: ['small', 'medium', 'large'],
          control: { type: 'radio' },
        }
    }
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        size: 'small',
        children: 'Click me!'
    }
};

export default meta;