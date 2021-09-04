/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import React from "react";
// import styled from "styled-components";

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

// const StyleAttachedComponent = styled(BaseButton)(stylefunction);

// function PrimaryButton({ backgroundColor, children }) {
//   return (
//     <StyleAttachedComponent backgroundColor={backgroundColor}>
//       {children}
//     </StyleAttachedComponent>
//   );
// }

// export default PrimaryButton;
