import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    children: { description: "Текст Button", type: "string" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Внешний вид Button",
      type: "string",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Размер Button",
      type: "string",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

// Stories

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Нажми на меня",
    size: "large",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Ну жмакни",
    size: "large",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Ну давай",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    variant: "primary",
    children: "Жми уже",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "primary",
    children: "Да ну тебя :(",
  },
};
