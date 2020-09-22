import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { TaskListContext } from "./context/store";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const { addTask } = useContext(TaskListContext);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
