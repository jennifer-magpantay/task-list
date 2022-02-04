import React from "react";

export const ListItem = ({ id, description, buttonClick }) => {
  function handleCheckClick() {
    setIsChecked(!isChecked);
  }

  function handleDeleteButton(id) {
    if (buttonClick) {
      buttonClick(id);
    }
  }

  return (
    <li>
      <div>
        <input
          type="checkbox"
          id={id}
          name="task"
          value={description}
          onClick={handleCheckClick}
        />
        <label htmlFor="task">{description}</label>
      </div>
      <button type="button" onClick={() => handleDeleteButton(id)}>
        DELETE
      </button>
    </li>
  );
};
