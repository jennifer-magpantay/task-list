import React from "react";

export const Form = ({ formSubmit, inputChange, value }) => {
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formSubmit) {
      formSubmit(event);
    }
  }
  function handleInputOnChange(event) {
    if (inputChange) {
      inputChange(event);
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="task">Type task descirption</label>
      <input
        id="task"
        name="task"
        type="text"
        value={value}
        onChange={handleInputOnChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
};
