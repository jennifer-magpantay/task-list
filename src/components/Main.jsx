import React from "react";
import { Form } from "./Form";

export const Main = ({children}) => {
  return (
    <main>
      <h1>TODO Track List</h1>
      {children}
    </main>
  );
};
