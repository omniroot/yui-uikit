import styles from "./App.module.css";
import { Button, Header, Input, Popup, Typography } from "lib";
import { DoorClosed, Home, MenuIcon, X } from "lucide-react";
import { Task } from "@/components/Task/Task";
import { useGlobalStore } from "@/store/store";

function App() {
  const tasks = useGlobalStore((state) => state.tasks);
  const addTask = useGlobalStore((state) => state.addTask);

  const _addTestTask = () => {
    addTask({ title: "Test task", completed: false, tags: ["test"] });
  };

  return (
    <div className={styles.App}>
      <Header
        leftSlot={<Typography size="h2">Yui-kit</Typography>}
        rightSlot={
          <Popup
            listItems={[
              {
                id: "1",
                icon: <Home size={"24px"} />,
                title: "Home",
                onClick: () => {
                  console.log("Go home!");
                },
              },
              {
                id: "2",
                icon: <DoorClosed size={"24px"} />,
                title: "Logout",
                onClick: () => {
                  console.log("Logout!");
                },
              },
            ]}
            position="left"
          >
            <MenuIcon />
          </Popup>
        }
      />
      <Button onClick={_addTestTask}>Add test task</Button>
      {tasks.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </div>
  );
}

export default App;
