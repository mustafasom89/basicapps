import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleSend = () => {
    alert(`First Name: ${firstName}\nMobile: ${mobile}`);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={handleMobileChange}
        className="input-field"
      />
      <button onClick={handleSend} className="send-button">
        Send
      </button>
    </div>
  );
}

export default App;
