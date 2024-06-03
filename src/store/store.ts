import { generateUUID } from "@/utils/generateUuid";
import { create } from "zustand";

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

interface IUseStore {
  tasks: ITasks;
  addTask: (newTask: ITaskWithoutId) => void;
  deleteTask: (taskId: string) => void;
  toggleTask: (taskId: string) => void;
  editTask: (task: ITask) => void;

  saveTaskToLocalStorage: () => void;
}
export const useGlobalStore = create<IUseStore>((set, get) => ({
  tasks: previusTasksState,
  addTask: (newTask: ITaskWithoutId) => {
    set((state) => ({
      tasks: [...state.tasks, { ...newTask, id: generateUUID() }],
    }));
  },
  deleteTask: (taskId: string) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },
  toggleTask: (taskId: string) => {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    }));
  },
  editTask: (newTask: ITask) => {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        } else {
          return task;
        }
      }),
    }));
  },
  saveTaskToLocalStorage: () => {
    localStorage.setItem("tasks", JSON.stringify(get().tasks));
  },
}));

useGlobalStore.subscribe((state) => {
  state.saveTaskToLocalStorage();
});
