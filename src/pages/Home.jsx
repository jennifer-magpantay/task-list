import React, { useState } from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { TaskList } from "../components/TaskList";

export const Home = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleFormSubmit(event) {
    setTasks([...tasks, input]);
    setInput("");
  }

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setInput(inputValue);
    console.log(event.target);
  }

  function handleButtonClick(event) {
    console.log("delete task");
  }
  return (
    <>
      <Header />
      <Main>
        <Form
          formSubmit={handleFormSubmit}
          inputChange={handleInputChange}
          value={input}
        />
        <TaskList data={tasks} buttonClick={handleButtonClick} />
      </Main>
    </>
  );
};
