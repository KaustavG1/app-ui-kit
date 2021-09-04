/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const ButtonOne = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: #f5f7f7;
  margin: 10px;

  &:active {
    background-color: #000f00;
  }
`;

function BaseButton({ className, backgroundColor, children, onClick }) {
  return (
    <ButtonOne className={className} backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </ButtonOne>
  );
}

export default BaseButton;
