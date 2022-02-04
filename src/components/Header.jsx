import React from "react";
import logo from "../assets/logoipsum.svg";
import { dateService } from "../services/dateService";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo Ipsum" />
      <span>{dateService()}</span>     
    </header>
  );
};
