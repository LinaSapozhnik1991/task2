import { Meta, StoryObj } from "@storybook/react";
import FileUpload from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "FileUpload/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    onFileChange: { action: "fileChanged" },
    disabled: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    disabled: false,
    size: "medium",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    disabled: false,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    disabled: false,
    size: "large",
  },
};
