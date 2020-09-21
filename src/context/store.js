import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

export const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  // Add tasks
  const addTask = (title) => {
    setTasks([...tasks, { id: uuidv4(), title, status: false }]);
  };

  // Remove tasks
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear tasks
  const clearList = () => {
    setTasks([]);
  };

  // Find task
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };
  const doneTask = (id, title, status) => {
    const updateTask = tasks.map((task) =>
      task.id === id ? { id, title, status } : task
    );
    console.log("updateTask", status);
    setTasks(updateTask);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
        doneTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
