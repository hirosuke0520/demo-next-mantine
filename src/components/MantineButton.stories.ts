import type { Meta, StoryObj } from "@storybook/react";

import { MantineButton } from "./MantineButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/MantineButton",
  component: MantineButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MantineButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "MantineButton",
  },
};

export const Red: Story = {
  args: {
    label: "MantineButton",
    color: "red",
  },
};

export const PrimaryCompact: Story = {
  args: {
    label: "MantineButton",
    size: "compact-md",
  },
};

export const PrimaryOutline: Story = {
  args: {
    label: "MantineButton",
    variant: "outline",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    label: "MantineButton",
    disabled: true,
  },
};
