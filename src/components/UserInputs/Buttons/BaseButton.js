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

// const ButtonTwo = styled.button(
//   {
//     border: "none",
//     padding: `5px 10px`,
//     borderRadius: "5px",
//     color: "#f5f7f7",

//     "&:active": {
//       backgroundColor: "#000f00",
//     },
//   },
//   (props) => ({
//     backgroundColor: props.backgroundColor,
//   })
// );

// const fn = (props) => ({
//   border: "none",
//   padding: `5px 10px`,
//   borderRadius: "5px",
//   color: "#f5f7f7",

//   "&:active": {
//     backgroundColor: "#000f00",
//   },
//   backgroundColor: props.backgroundColor,
// });

// const ButtonThree = styled.button((props) => fn(props));

// function BaseButton({ backgroundColor, children }) {
//   return (
//     <div>
//       <ButtonOne backgroundColor={backgroundColor}>{children}</ButtonOne>
//       <br />
//       <br />
//       <br />
//       <ButtonTwo backgroundColor={backgroundColor}>{children}</ButtonTwo>
//       <br />
//       <br />
//       <br />
//       <ButtonThree backgroundColor={backgroundColor}>{children}</ButtonThree>
//     </div>
//   );
// }

function BaseButton({ className, backgroundColor, children, onClick }) {
  return (
    <ButtonOne className={className} backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </ButtonOne>
  );
}

export default BaseButton;
