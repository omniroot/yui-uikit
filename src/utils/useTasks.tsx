// export const useTasks = () => {
//   const [tasks, setTasks] = useState<ITasks>(previusTasksState);
//   useEffect(() => {
//     if (tasks) {
//
//       console.log("Auto save tasks to LocalStorage!");
//     }
//   }, [tasks]);

//   const addTask = (newTask: ITaskWithoutId) => {
//     setTasks((prev) => [...prev, { ...newTask, id: generateUUID() }]);
//     console.log("Task added!", newTask);
//   };

//   const deleteTask = (taskId: string) => {
//     setTasks((prev) => prev.filter((task) => task.id !== taskId));
//     console.log("Task removed!", taskId);
//   };

//   const editTask = (newTask: ITask) => {
//     setTasks((prev) =>
//       prev.map((task) => {
//         if (task.id == newTask.id) {
//           return newTask;
//         } else {
//           return task;
//         }
//       })
//     );
//     console.log("Task edited!", newTask);
//   };

//   const toggleTaskComplete = (taskId: string) => {
//     setTasks((prev) =>
//       prev.map((task) => {
//         if (task.id == taskId) {
//           return { ...task, completed: !task.completed };
//         } else {
//           return task;
//         }
//       })
//     );
//     console.log("Task completed state changed!", taskId);
//   };

//   const saveTaskToLocalStorage = () => {
//
//   };
//   return { tasks, addTask, deleteTask, toggleTaskComplete, editTask };
// };
