import { Meta, StoryObj } from "@storybook/react";
import DropdownWithList from "./DropdownWithList";

const meta: Meta<typeof DropdownWithList> = {
  title: "Dropdowns/DropdownWithList",
  component: DropdownWithList,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    selectedOption: { control: "text" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    isOpen: { control: "boolean" },
    disabled: { control: "boolean" },
    isSelect: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownWithList>;

export const Default: Story = {
  args: {
    label: "Выберите элемент",
    options: ["Вариант 1", "Вариант 2", "Вариант 3"],
    selectedOption: "",
    size: "medium",
    disabled: false,
    isOpen: false,
  },
};

export const WithSelectedOption: Story = {
  args: {
    label: "Выберите элемент",
    options: ["Вариант 1", "Вариант 2", "Вариант 3"],
    selectedOption: "Опция 2",
    size: "medium",
    isSelect: true,
    disabled: false,
    isOpen: false,
  },
};
export const OpenList: Story = {
  args: {
    label: "Выберите элемент",
    options: [
      "Вариант 1",
      "Вариант 2",
      "Вариант 3",
      "Вариант 4",
      "Вариант 5",
      "Вариант 6",
    ],
    selectedOption: "",
    size: "medium",
    disabled: true,
    isOpen: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Выберите элемент",
    options: ["Элемент 1", "Элемент 2", "Элемент 3"],
    selectedOption: "",
    size: "medium",
    disabled: true,
    isOpen: true,
  },
};
