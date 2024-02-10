
import { Button } from '@/components/ui/Button';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
 
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Default Button"
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button"

  },
};

export const Plain: Story = {
  args: {
    variant: "plain",
    children: "Plain Button"
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
    onClick: () => console.log("hello")
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: "Small Button"
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: "Large Button"
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
  },
};