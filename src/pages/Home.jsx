import React, { useState } from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { TaskList } from "../components/TaskList";
import { getNewId } from "../services/idService";
import { filterList } from "../services/filterListService";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

export const Home = () => {
  const [inputNewTask, setInputNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleFormSubmit() {
    // tasks will save an array of objects as 'new task'
    const objNewTask = {
      id: getNewId(),
      description: inputNewTask,
    };
    setTasks((oldstate) => [...oldstate, objNewTask]);
    setInputNewTask("");
  }

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setInputNewTask(inputValue);
  }

  function handleDeleteButton(id) {
    setTasks(filterList(tasks, id));
  }

  return (
    <>
      <Header />
      <Main>
        <Section title="TODO Track List" />
        <Container>
          <Form
            formSubmit={handleFormSubmit}
            inputChange={handleInputChange}
            value={inputNewTask}
          />
          <TaskList data={tasks} buttonClick={handleDeleteButton} />
        </Container>
      </Main>
    </>
  );
};
