import { Meta, StoryObj } from "@storybook/react";
import DropdownTag from "./DropdownTag";

const meta: Meta<typeof DropdownTag> = {
  title: "Dropdowns/DropdownTag",
  component: DropdownTag,
  tags: ["autodocs"],
  argTypes: {
    tags: { control: { type: "object" } },
    onTagRemove: { action: "tagRemoved" },

    options: { control: { type: "object" } },
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownTag>;

export const NoTagsDropdown: Story = {
  args: {
    tags: [],
    options: ["Option1", "Option2", "Option3"],
    size: "medium",
  },
};

export const DefaultDropdown: Story = {
  args: {
    tags: ["Tag1", "Tag2"],
    options: ["Option1", "Option2", "Option3"],
    size: "medium",
  },
};

export const SingleTagDropdown: Story = {
  args: {
    tags: ["SingleTag"],
    options: ["Option1", "Option2", "Option3"],
    size: "medium",
  },
};

export const LargeDropdown: Story = {
  args: {
    tags: ["Tag1", "Tag2"],
    options: ["Option1", "Option2", "Option3"],
    size: "large",
  },
};

export const CustomClassDropdown: Story = {
  args: {
    tags: ["CustomTag"],
    options: ["Option1", "Option2", "Option3"],
    size: "medium",
    className: "custom-dropdown-class",
  },
};
