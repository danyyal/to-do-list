import React, { useState } from "react";
import "./ToggleButton.scss"; // Import the CSS file

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    if (!isOn) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`toggle-button ${isOn ? "on" : "off"}`}
        onClick={handleClick}
      >
        <div className={`toggle-dot ${isOn ? "on" : "off"}`}></div>
      </div>
    </div>
  );
}

export default ToggleButton;
