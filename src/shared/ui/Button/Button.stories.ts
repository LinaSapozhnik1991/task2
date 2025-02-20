import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonColors, ButtonSizes } from "./Button.types";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    pseudo: { hover: true, active: true },
  },
  argTypes: {
  
    size: {
      control: {
        type: "select",
        options: [
      ButtonSizes.Large ,
       ButtonSizes.Medium ,
        ButtonSizes.Small ,
         ButtonSizes.XS,
        ],
      },
    },
    radius:
     { control: 'boolean'},
     mini:
     { control: 'boolean'},
    backgroundColor: {
      control: {
        type: "select",
        options: [
      ButtonColors.Primary,
        ButtonColors.Secondary,
        ButtonColors.Clear,
        ButtonColors.Critical,
        ButtonColors.CriticalSecondary,
        ],
      },
    },
  
  }

};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    size:  ButtonSizes.Large ,
    radius: false,
    mini: true,
    backgroundColor: ButtonColors.Primary,
  },
};
export const ButtonSecondary: Story = {
  args: {
    size:  ButtonSizes.Large,
    radius: false,
    mini: false,
    backgroundColor:  ButtonColors.Secondary,
  },
};
export const ButtonClear: Story = {
  args: {
    size: ButtonSizes.Large,
    radius: false,
    mini: false,
    backgroundColor:  ButtonColors.Clear,
  },
};

export const ButtonCritical: Story = {
  args: {
    size:  ButtonSizes.Large,
    radius: false,
    mini: false,
    backgroundColor:  ButtonColors.Critical,
  },
};
export const ButtonSecondaryCritical: Story = {
  args: {
    size: ButtonSizes.Large,
    radius: false,
    mini: false,
    backgroundColor:  ButtonColors.CriticalSecondary,
  },
};
