import React, { useState } from "react";

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
    // Perform your desired action with the first name and mobile number
    console.log(`First Name: ${firstName}`);
    console.log(`Mobile: ${mobile}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={handleMobileChange}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;
