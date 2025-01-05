import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "x_large"],
      description: "Размер Spinner",
      type: "string",
    },
    color: {
      control: { type: "select" },
      options: ["primary", "black", "white"],
      description: "Цвет Spinner",
      type: "string",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

// Stories

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    size: "medium",
  },
};

export const Black: Story = {
  args: {
    color: "black",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
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
