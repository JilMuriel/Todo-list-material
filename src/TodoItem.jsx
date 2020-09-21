import React, { useContext, useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { TaskListContext } from "./context/store";
export const TodoItem = ({ item }) => {
  const { removeTask, doneTask } = useContext(TaskListContext);
  const { id, title, status } = item;
  const [check, setCheck] = useState(status);

  const updateItem = () => {
    doneTask(id, title, check);
  };

  useEffect(updateItem, [check]);
  
  const handleClick = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <ListItem dense button>
      <FormControlLabel
        control={
          <Checkbox checked={check} onChange={handleClick} name={title} />
        }
        label={title}
      ></FormControlLabel>
      <button onClick={() => removeTask(id)}>x</button>
    </ListItem>
  );
};

export default TodoItem;
