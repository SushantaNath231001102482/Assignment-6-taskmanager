import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const initialTasks = [
  {
    id: "TASK-001",
    title: "Complete React Assignment",
    description:
      "Complete the React Task Manager assignment and prepare the project for submission.",
    priority: "High",
    category: "Academic",
    raisedAt: new Date().toISOString(),
    dueDate: "2026-08-28",
    status: "Pending",
  },
  {
    id: "TASK-002",
    title: "Prepare Project Documentation",
    description:
      "Prepare documentation and screenshots for the academic project.",
    priority: "Medium",
    category: "Academic",
    raisedAt: new Date().toISOString(),
    dueDate: "2026-08-28",
    status: "Raised",
  },
  {
    id: "TASK-003",
    title: "Organize Personal Files",
    description:
      "Organize important personal documents and files.",
    priority: "Low",
    category: "Personal",
    raisedAt: new Date().toISOString(),
    dueDate: "2026-08-28",
    status: "Closed",
  },
];

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: `TASK-${String(Date.now()).slice(-5)}`,
      raisedAt: new Date().toISOString(),
      status: "Raised",
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedTask,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  const completeTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "Closed",
            }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}