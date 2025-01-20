import type { Meta, StoryObj } from "@storybook/react";
import {FloatButton} from "./FloatButton";
import Cross from "../../../public/icons/Cross";
import React from "react";
import Arrow from "../../../public/icons/Arrow";

const meta = {
  title: "Components/FloatButton",
  component: FloatButton,
  parameters: {
    layout: "right-bottom",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Цвет FloatButton",
      type: "string",
    },
    position: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Расположение FloatButton",
      type: "string",
    },
    typeFloatButton: {
      control: { type: "select" },
      options: ["text", "opening", "scrollingToTop"],
      description: "Тип FloatButton",
      type: "string",
    },
    floatButtonText: {
      control: { type: "text" },
      description: "Текст, который подсвечивается при наведение на FloatButton типа text",
      type: "string",
    },
    distanceForStartScrolling: {
      control: { type: "number" },
      description: "Высота с которой появляется FloatButton типа scrollingToTop",
      type: "number",
    },
    icon: {
      description: "Иконка FloatButton",
      control: false,
    },
    otherOpeningButtons: {
      description: "Иконки которые появляются на FloatButton типа opening",
      control: false
    },
    switchIconsForOpening: {
      description: "Кнопки которые появляются при открытие FloatButton типа opening",
      control: false,
    }
  },
} satisfies Meta<typeof FloatButton>;

export default meta;

// Stories

type Story = StoryObj<typeof meta>;

export const PrimaryScrolling: Story = {
  args: {
    variant: "primary",
    position: "right",
    typeFloatButton: "scrollingToTop",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<Arrow key={981234}/>, <Cross key={51234}/>],
  },
};

export const SecondaryScrolling: Story = {
  args: {
    variant: "secondary",
    position: "right",
    typeFloatButton: "scrollingToTop",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<Arrow key={981234}/>, <Cross key={51234}/>],
  },
};

export const PrimaryText: Story = {
  args: {
    variant: "primary",
    position: "right",
    typeFloatButton: "text",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<Arrow key={981234}/>, <Cross key={51234}/>],
  },
};

export const SecondaryText: Story = {
  args: {
    variant: "secondary",
    position: "right",
    typeFloatButton: "text",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<Arrow key={981234}/>, <Cross key={51234}/>],
  },
};

export const PrimaryOpening: Story = {
  args: {
    variant: "primary",
    position: "right",
    typeFloatButton: "opening",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<div key={'1788231xx_div'} style={{
      display: "flex",
      transform: "rotate(-45deg)"
    }}><Arrow key={981234}/>
    </div>, <Cross key={51234}/>],
  },
};

export const SecondaryOpening: Story = {
  args: {
    variant: "secondary",
    position: "right",
    typeFloatButton: "opening",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<div key={'1788231xx_div'} style={{
      display: "flex",
      transform: "rotate(-45deg)"
    }}><Arrow key={981234}/>
    </div>, <Cross key={51234}/>],
  },
};

export const PrimaryTextLeft: Story = {
  args: {
    variant: "primary",
    position: "left",
    typeFloatButton: "text",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<Arrow key={981234}/>, <Cross key={51234}/>],
  },
};

export const PrimaryTextCenter: Story = {
  args: {
    variant: "primary",
    position: "center",
    typeFloatButton: "text",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<Arrow key={981234}/>, <Cross key={51234}/>],
  },
};

export const PrimaryTextRight: Story = {
  args: {
    variant: "primary",
    position: "right",
    typeFloatButton: "text",
    floatButtonText: "button",
    distanceForStartScrolling: 120,
    icon: <Cross/>,
    otherOpeningButtons: [<Cross key="key1" />, <Cross key="key2" />, <Cross key="key3" />],
    switchIconsForOpening: [<Arrow key={981234}/>, <Cross key={51234}/>],
  },
};