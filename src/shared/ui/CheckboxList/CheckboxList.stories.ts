import { Meta, StoryObj } from "@storybook/react";
import CheckboxList from "./CheckboxList";

const meta: Meta<typeof CheckboxList> = {
  title: "Radio,Checkbox,Toggle/CheckboxList",
  component: CheckboxList,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxList>;

export const WithNestedOptions: Story = {
  args: {
    items: [
      {
        id: 1,
        label: "Опция",
        state: "checked",
        children: [
          {
            id: 2,
            label: "Подопция",
            state: "minus",
          },
          {
            id: 3,
            label: "Подопция",
            state: "default",
            children: [
              {
                id: 4,
                label: "Подподопция",
                state: "checked",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        label: "Опция",
        state: "plus",
      },
    ],
  },
};
