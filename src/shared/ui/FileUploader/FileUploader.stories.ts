import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import FileUploader from "./FileUploader";

const meta = {
  title: "FileUpload/FileUploader",
  component: FileUploader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onFileChange: fn(),
    disabled: false,
    size: "medium",
  },
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    error: true,
    size: "small",
  },
};
export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
