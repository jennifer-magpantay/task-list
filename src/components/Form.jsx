import React, { useState } from "react";

export const Form = ({ formSubmit, inputChange }) => {
  const [input, setInput] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formSubmit) {
      formSubmit();
    }
  }
  function handleInputOnChange({ target }) {
    if (inputChange) {
      inputChange(target.value);
    }
    console.log(target.value);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="task">Type task descirption</label>
      <input
        id="task"
        name="task"
        type="text"
        value={input}
        onChange={handleInputOnChange}
      />
      <button type="submit">ADD</button>
      {input}
    </form>
  );
};
