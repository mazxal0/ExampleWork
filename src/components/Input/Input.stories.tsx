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
  },
  argTypes: {
    label: { type: "string" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    label: "test",
    onChange: (value) => {
      console.log(value);
    },
  },
};
