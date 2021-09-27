import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setFullName((previousValue) => {
      if (inputName === "fName") {
        return {
          firstName: newValue,
          lastName: previousValue.lastName
        };
      } else if (inputName === "lName") {
        return {
          firstName: previousValue.firstName,
          lastName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
