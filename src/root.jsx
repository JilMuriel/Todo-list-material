import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Typography, Container } from "@material-ui/core";
import TaskListContextProvider from "./context/store";
function Root() {
  return (
    <TaskListContextProvider>
      <Container>
        <Typography component="h1" variant="h2">
          Todos
        </Typography>
        <TodoForm />
        <TodoList />
      </Container>
    </TaskListContextProvider>
  );
}

export default Root;
