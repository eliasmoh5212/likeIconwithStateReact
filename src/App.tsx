import React, { useState } from "react";
import { AiFillCalendar } from "react-icons/ai";
import Like from "./Like";
import { successNotification } from "./notification";

import "./App.css";
function App() {
  const handleClick = () => {
    successNotification("Changed", "Clicked");
  };
  return (
    <div>
      <Like onClick={handleClick} />
    </div>
  );
}

export default App;
