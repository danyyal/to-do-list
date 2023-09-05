import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import Heading from "../Heading/Heading";
const Header = () => {
  return (
    <>
      <ToggleButton />
      <Heading text={"Todo List"} />
    </>
  );
};

export default Header;
