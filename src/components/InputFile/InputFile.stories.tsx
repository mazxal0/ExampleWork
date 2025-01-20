import type { Meta, StoryObj } from "@storybook/react";
import { InputFile } from "./InputFile";

const meta = {
  title: "Components/InputFile",
  component: InputFile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Размер fileInput",
      type: "string",
    },
    background: {
      control: {type: "select"},
      options: ["main", "second", "item"],
      description: "Цвет заднего фона",
      type: "string",
    },
    condition: {
      control: {type: "select"},
      options: ["disabled", "active"],
      description: "Состояние активности inputFile",
      type: "string",
    },
    label: {
      description: "label inputFile"
    },
    onChange: {
      description: "функция изменения значения Input"
    },
    text: {
      description: "Текст label"
    },
    allowed_types: {
      description: "Разрешенные типы данных для загрузки через inputFile"
    }
  },
} satisfies Meta<typeof InputFile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    variant: "large",
    label: "input-file",
    onChange: () => {},
    condition: "active",
    text: "Ввыберите файл",
    allowed_types: "*"
  },
};

export const Medium: Story = {
  args: {
    variant: "medium",
    label: "input-file",
    onChange: () => {},
    condition: "active",
    text: "Ввыберите файл",
    allowed_types: "*"
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    label: "input-file",
    onChange: () => {},
    condition: "active",
    text: "Ввыберите файл",
    allowed_types: "*"
  },
};

export const Disabled: Story = {
  args: {
    variant: "large",
    label: "input-file",
    onChange: () => {},
    condition: "disabled",
    text: "Ввыберите файл",
    allowed_types: "*"
  },
};

export const Main: Story = {
  args: {
    variant: "large",
    background: "main",
    label: "input-file",
    onChange: () => {},
    condition: "active",
    text: "Ввыберите файл",
    allowed_types: "*"
  },
};

export const Second: Story = {
  args: {
    variant: "large",
    background: "second",
    label: "input-file",
    onChange: () => {},
    condition: "active",
    text: "Ввыберите файл",
    allowed_types: "*"
  },
};

export const Item: Story = {
  args: {
    variant: "large",
    background: "item",
    label: "input-file",
    onChange: () => {},
    condition: "active",
    text: "Ввыберите файл",
    allowed_types: "*"
  },
};