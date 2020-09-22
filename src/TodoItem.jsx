import React, { useContext, useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { TaskListContext } from "./context/store";
export const TodoItem = ({ item }) => {
  const { removeTask, doneTask, editTask } = useContext(TaskListContext);
  const [textField, setTextField] = useState("");
  const [hidden, setHidden] = useState(false);

  const { id, title, status } = item;
  const [check, setCheck] = useState(status);

  const handleTaskDone = () => {
    doneTask(id, title, check);
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    editTask(id, textField, status);
    setTextField("");
    setHidden(!hidden);
  };
  const handleChange = (e) => {
    setTextField(e.target.value);
  };

  useEffect(handleTaskDone, [check]);

  const handleClick = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <ListItem dense button>
      <FormControlLabel
        control={
          <>
            <Checkbox checked={check} onChange={handleClick} />
            {hidden ? (
              <form onSubmit={handleUpdate}>
                <input type="text" value={textField} onChange={handleChange} />
              </form>
            ) : null}
          </>
        }
        label={hidden ? null : title}
      ></FormControlLabel>
      <button onClick={() => setHidden(!hidden)}>|</button>
      <button onClick={() => removeTask(id)}>x</button>
    </ListItem>
  );
};

export default TodoItem;
