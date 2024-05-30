import { generateUUID } from "@/utils/generateUuid";
import { useEffect, useState } from "react";

export interface ITask {
  id: string;
  title?: string;
  completed?: boolean;
  tags?: string[];
}
export type ITaskWithoutId = Omit<ITask, "id">;

export type ITasks = ITask[];

let previusTasksState: ITasks;

if (!localStorage.getItem("firstStart")) {
  localStorage.setItem("firstStart", "false");
  localStorage.setItem("tasks", "[]");
  previusTasksState = [];
  console.log("FirstStart is: ", localStorage.getItem("firstStart"));
}
if (localStorage.getItem("firstStart") === "false") {
  const _tempTasks: ITasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  if (_tempTasks) {
    previusTasksState = _tempTasks;
  }
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITasks>(previusTasksState);
  useEffect(() => {
    if (tasks) {
      saveTaskToLocalStorage();
      console.log("Auto save tasks to LocalStorage!");
    }
  }, [tasks]);

  const addTask = (newTask: ITaskWithoutId) => {
    setTasks((prev) => [...prev, { ...newTask, id: generateUUID() }]);
    console.log("Task added!", newTask);
  };

  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    console.log("Task removed!", taskId);
  };

  const editTask = (newTask: ITask) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id == newTask.id) {
          return newTask;
        } else {
          return task;
        }
      })
    );
    console.log("Task edited!", newTask);
  };

  const toggleTaskComplete = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id == taskId) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
    console.log("Task removed!", taskId);
  };

  const saveTaskToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  return { tasks, addTask, deleteTask, toggleTaskComplete, editTask };
};
