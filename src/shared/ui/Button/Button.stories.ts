import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    size: {
      control: {
        type: "select",
        options: [
          "large",
          "medium",
          "small",
          "xs",
          "mini-large",
          "mini-medium",
          "mini-small",
          "mini-xs",
        ],
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["Small", "Big"],
      },
    },
    backgroundColor: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "clear",
          "critical",
          "critical-secondary",
        ],
      },
    },
    disabled: { control: "boolean" },
    active: { control: "boolean" },
    hover: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    size: "large",
    radius: "Small",
    backgroundColor: "primary",
  },
};
export const ButtonSecondary: Story = {
  args: {
    size: "large",
    radius: "Small",
    backgroundColor: "secondary",
  },
};
export const ButtonClear: Story = {
  args: {
    size: "large",
    radius: "Small",
    backgroundColor: "clear",
  },
};

export const ButtonCritical: Story = {
  args: {
    size: "large",
    radius: "Small",
    backgroundColor: "critical",
  },
};
export const ButtonSecondaryCritical: Story = {
  args: {
    size: "large",
    radius: "Small",
    backgroundColor: "critical-secondary",
  },
};
