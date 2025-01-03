import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "input",
    variant: "large",
    background: "item",
  },
  argTypes: {
    label: { type: "string" },
    variant: { type: "string" },
    background: { type: "string" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Base",
    variant: "large",
    background: "main",
    onChange: () => {},
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    variant: "large",
    background: "main",
    onChange: () => {},
  },
};

export const Medium: Story = {
  args: {
    label: "Medium",
    variant: "medium",
    background: "main",
    onChange: () => {},
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    variant: "small",
    background: "main",
    onChange: () => {},
  },
};

export const ColorSecond: Story = {
  args: {
    label: "SecondBG",
    variant: "large",
    background: "second",
    onChange: () => {},
  },
};

export const ColorItem: Story = {
  args: {
    label: "ItemBG",
    variant: "large",
    background: "item",
    onChange: () => {},
  },
};

export const NoLabel: Story = {
  args: {
    label: "",
    variant: "large",
    background: "main",
    onChange: () => {},
  },
};
