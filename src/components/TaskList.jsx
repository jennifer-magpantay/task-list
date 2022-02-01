import React from "react";
import { ListItem } from "./ListItem";

export const TaskList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item} item={item} />
      ))}
    </ul>
  );
};
