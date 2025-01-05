import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { description: "Заголовок Input", type: "string" },
    variant: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Размер Input",
      type: "string",
    },
    background: {
      control: { type: "select" },
      options: ["main", "second", "item"],
      description: "Цвет заднего фона Input",
      type: "string",
    },
    onChange: {
      description: "Изменение значения Input",
    },
    condition: {
      control: { type: "select" },
      options: ["active", "disabled"],
      description: "Состояние Input",
      defaultValue: "active",
      type: "string",
    },
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

export const Disabled: Story = {
  args: {
    label: "Disabled",
    variant: "large",
    background: "main",
    condition: "disabled",
    onChange: () => {},
  },
};
