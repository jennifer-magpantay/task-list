import React, { useState } from "react";
import { getNewId } from "../services/idService";
import { ListItem } from "./ListItem";

export const TaskList = ({ data, buttonClick }) => {
  return (
    <ul>
      {data.map((item) => {
        return <ListItem key={item} item={item} buttonClick={buttonClick} />;
      })}
    </ul>
  );
};
