/* eslint-disable no-console */
import React from "react";

import BaseButton from "./BaseButton";

export default {
  component: BaseButton,
  title: "BaseButton",
};

const Template = (args) => <BaseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#0099ff",
  children: "Click Me",
  handleClick: () => console.log("Click Me"),
};
