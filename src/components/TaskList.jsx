import React from "react";
import { ListItem } from "./ListItem";

export const TaskList = ({ data, buttonClick }) => {
  return (
    <ul>
      {data.map(({ id, description }) => {
        return <ListItem key={id} id={id} description={description} buttonClick={buttonClick}/>;
      })}
    </ul>
  );
};
