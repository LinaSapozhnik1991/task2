// components/Checkbox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Radio,Checkbox,Toggle/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small", "xsmall"],
      },
    },
    state: {
      control: {
        type: "select",
        options: ["default", "hover", "active", "disabled"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: "medium",
    state: "default",
  },
};

export const Checked: Story = {
  args: {
    size: "medium",
    state: "checked",
  },
};

export const Plus: Story = {
  args: {
    size: "medium",
    state: "plus",
  },
};
export const Minus: Story = {
  args: {
    size: "medium",
    state: "minus",
  },
};
