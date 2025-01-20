import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "bottom",
  },
  tags: ["autodocs"],
  args: {
    information: [
      {
        title: "О КИБЕРЗОНЕ",
        column: [
          { value: "Организация", link: "/" },
          { value: "Отделы", link: "/about" },
          { value: "Сотрудники", link: "/team" },
        ],
      },
      {
        title: "ПРОЕКТЫ",
        column: [
          { value: "Esports MIREA", link: "/esports" },
          { value: "CyberZone Job", link: "/cyberzonejob" },
          { value: "CyberZone Docs", link: "/docs" },
        ],
      },
      {
        title: "ДЛЯ СТУДЕНТОВ",
        column: [
          { value: "Бронировние", link: "/ticket" },
          { value: "Стажировки", link: "/job" },
        ],
      },
    ]

  },
  argTypes: {
    information: {
      control: "object",
      description: "Ссылки футера"
    }
  },
} satisfies Meta<typeof Footer>;

export default meta;

// Stories

type Story = StoryObj<typeof meta>;

export const footer: Story = {
  args: {
  },
};
