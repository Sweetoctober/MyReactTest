import React, { useState } from "react";
import "./styles.css";
function App() {
  const [message, setMessage] = useState(
    "This message will be updated by React."
  );
  const handleClick = () => {
    setMessage("Button Clicked!");
  };

  return (
    <div className="container">
      <h1>My First React Project</h1>
      <h4>
        This page contains a JavaScript code, which changes the following line
        upon pressing the button
      </h4>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App;
