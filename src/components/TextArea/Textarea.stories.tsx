import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "input",
    height: "medium",
    background: "item",
    resize: "both",
  },
  argTypes: {
    label: { type: "string" },
    height: { type: "string" },
    background: { type: "string" },
    resize: { type: "string" },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Base",
    background: "main",
    height: "medium",
    resize: "both",
    onChange: () => {},
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    background: "main",
    height: "large",
    resize: "both",
    onChange: () => {},
  },
};

export const Medium: Story = {
  args: {
    label: "Medium",
    background: "main",
    height: "medium",
    resize: "both",
    onChange: () => {},
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    background: "main",
    height: "small",
    resize: "both",
    onChange: () => {},
  },
};

export const ColorSecond: Story = {
  args: {
    label: "SecondBG",
    background: "second",
    height: "small",
    resize: "both",
    onChange: () => {},
  },
};

export const ColorItem: Story = {
  args: {
    label: "ItemBG",
    background: "item",
    height: "small",
    resize: "both",
    onChange: () => {},
  },
};

export const VerticalResize: Story = {
  args: {
    label: "Vertical",
    background: "main",
    height: "small",
    resize: "vertical",
    onChange: () => {},
  },
};

export const HorizontalResize: Story = {
  args: {
    label: "Horizontal",
    background: "main",
    height: "small",
    resize: "horizontal",
    onChange: () => {},
  },
};

export const NoResize: Story = {
  args: {
    label: "No resize",
    background: "main",
    height: "small",
    resize: "none",
    onChange: () => {},
  },
};

export const NoLabel: Story = {
  args: {
    label: "",
    background: "main",
    height: "small",
    resize: "both",
    onChange: () => {},
  },
};
