import React, { useState } from "react";

export const ListItem = ({ id, description, buttonClick }) => {
  const [isChecked, setIsChecked] = useState(false);

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
        <input type="checkbox" id={id} name="task" onClick={handleCheckClick} />
        <label htmlFor="task" className={isChecked ? "checked" : ""}>
          {description}
        </label>
      </div>
      <button type="button" onClick={() => handleDeleteButton(id)}>
        DELETE
      </button>
    </li>
  );
};
