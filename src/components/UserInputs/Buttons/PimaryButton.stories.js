/* eslint-disable no-console */
import React from "react";

import PrimaryButton from "./PrimaryButton";

export default {
  component: PrimaryButton,
  title: "PrimaryButton",
};

const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#0099ff",
  children: "Primary Click",
  handleClick: () => console.log("Click Me"),
};
