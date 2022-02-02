import React, { useState } from "react";
import { getNewId } from "../services/idService";

export const ListItem = ({ item, buttonClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckClick() {
    setIsChecked(!isChecked);
  }

  return (
    <li>
      <div>
        <input
          type="checkbox"
          id={item}
          name={item}
          onClick={handleCheckClick}
        />
        <label htmlFor={item} className={isChecked ? "checked" : ""}>
          {item}
        </label>
      </div>
      <button type="button" onClick={buttonClick}>
        DELETE
      </button>
    </li>
  );
};
