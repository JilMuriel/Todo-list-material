import React, { useContext } from "react";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";

// import DeleteIcon from "@material-ui/icons/Delete";
import { TaskListContext } from "./context/store";

const TodoList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <List>
      {tasks.length ? (
        tasks.map((taskItem) => (
          <TodoItem
            id={taskItem.id}
            title={taskItem.title}
            status={taskItem.status}
            item={taskItem}
          />
        ))
      ) : (
        <h1>No Task ATM</h1>
      )}
    </List>
  );
};

export default TodoList;
