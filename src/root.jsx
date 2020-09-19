import React, { useState } from "react";
import RootStyles from "./root.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Typography } from "@material-ui/core";
function Root() {
  const [todos, setTodos] = useState([]);
  return (
    <div className={RootStyles.root}>
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);

          setTodos(newTodos);
        }}
      />
    </div>
  );
}

export default Root;
