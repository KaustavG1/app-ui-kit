/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import BaseButton from "./BaseButton";
import extend from "../../../lib/hoc/extend";

const stylefunction = () => ({
  color: "#f5f7f7",

  "&:active": {
    backgroundColor: "#ebc634",
    color: "#000",
  },
});

export default extend(BaseButton, stylefunction);
