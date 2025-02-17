import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Radio,Checkbox,Toggle/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small", "xs"],
      },
    },

    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    checked: true,
    isDefault: true,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    size: "medium",
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    size: "medium",
    checked: false,
    disabled: true,
  },
};
