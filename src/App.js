/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React from "react";
import BaseButton from "./components/UserInputs/Buttons/BaseButton";
import PrimaryButton from "./components/UserInputs/Buttons/PrimaryButton";

function App() {
  const handleClick = () => alert("I am clicked");
  return (
    <div>
      <BaseButton backgroundColor="red" onClick={handleClick}>
        Base Button
      </BaseButton>
      <PrimaryButton backgroundColor="#0099ff" onClick={handleClick}>
        Primary Button
      </PrimaryButton>
    </div>
  );
}

export default App;
