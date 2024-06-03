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
  saveTaskToLocalStorage: () => void;
}
export const useGlobalStore = create<IUseStore>((set, get) => ({
  tasks: previusTasksState,
  addTask: (newTask: ITaskWithoutId) => {
    set((state) => ({
      tasks: [...state.tasks, { ...newTask, id: generateUUID() }],
    }));
  },
  saveTaskToLocalStorage: () => {
    localStorage.setItem("tasks", JSON.stringify(get().tasks));
  },
}));

useGlobalStore.subscribe((state) => {
  state.saveTaskToLocalStorage();
});
