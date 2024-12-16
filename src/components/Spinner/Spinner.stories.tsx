import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "medium",
    color: "primary",
  },
  argTypes: {
    size: { type: "string" },
    color: { type: "string" },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

// Stories

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Black: Story = {
  args: {
    color: "black",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const X_Large: Story = {
  args: {
    size: "x_large",
  },
};
