import React from "react";

export const ListItem = ({ item }) => {
  return (
    <li>
      <p>{item}</p>
      <button type="button">DELETE</button>
    </li>
  );
};
