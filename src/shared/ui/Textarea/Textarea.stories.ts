import { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";
import { InputSizes } from "../Input/Input.types";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    pseudo: { hover: true, active: true },
  },
  argTypes: {
    value: { control: "text" },
    inputSize: {
      control: {
        type: "select",
        options: [InputSizes.Large, InputSizes.Medium, InputSizes.Small],
      },
    },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    placeholder: { control: "text" },
    maxLength: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const DefaultTextarea: Story = {
  args: {
    value: "",
    inputSize: InputSizes.Medium,
    placeholder: "Введите текст...",
    maxLength: 200,
  },
};

export const ErrorTextarea: Story = {
  args: {
    value: "",
    inputSize: InputSizes.Medium,
    error: true,
    placeholder: "Ошибка ввода...",
  },
};

export const DisabledTextarea: Story = {
  args: {
    value: "Этот текст недоступен для редактирования.",
    inputSize: InputSizes.Medium,
    disabled: true,
    placeholder: "Текстовое поле отключено...",
  },
};

export const RoundedTextarea: Story = {
  args: {
    value: "",
    inputSize: InputSizes.Medium,
    placeholder: "Закругленное текстовое поле...",
  },
};
