import type { Meta, StoryObj } from "@storybook/react";

import { HeaderComponent } from "../../components";
import "../../App.scss";

const meta = {
  title: "Components/Header",
  component: HeaderComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Render: Story = {
  args: {},
};
