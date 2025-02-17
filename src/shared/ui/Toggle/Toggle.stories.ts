import { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";


const meta: Meta<typeof Toggle> = {
  title: "Radio,Checkbox,Toggle/Toggle", 
  component: Toggle, 
  tags: ["autodocs"],
  argTypes: {
    isActive: { control: 'boolean' }, 
    disabled: { control: 'boolean' },
    onToggle: { action: "toggled" }, 
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;


export const DefaultToggle: Story = {
  args: {
    isActive: false, 
    disabled: false, 
  },
};


export const ActiveToggle: Story = {
  args: {
    isActive: true, 
    disabled: false, 
  },
};

export const DisabledToggle: Story = {
  args: {
    isActive: false,
    disabled: true, 
  },
};
