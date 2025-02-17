import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["Small", "Big"],
      },
    },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    active: { control: "boolean" },
    hover: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    label: "",
    value: "",
    radius: "Small",
    size: "medium",
  },
};
export const DefaultTextarea: Story = {
  args: {
    label: "Textarea Label",
    value: "",
    radius: "Small",
    size: "medium",
    isTextarea: true,
  },
};
