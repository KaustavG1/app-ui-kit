/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

function extend(BaseComponent, StyleFunction) {
  const StyleAttachedComponent = styled(BaseComponent)(StyleFunction);

  return function StyleAttachedComponentFn(props) {
    console.log(props);
    return <StyleAttachedComponent {...props} />;
  };
}

export default extend;
