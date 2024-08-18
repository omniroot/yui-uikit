import styles from "./App.module.css";
import { BottomNavigation, Button, Header, Popup, Typography } from "lib";
import { DoorClosed, Home, MenuIcon, Settings } from "lucide-react";
import { Task } from "@/components/Task/Task";
import { useGlobalStore } from "@/store/store";
import {
  ToastContainer,
  useToast,
} from "lib/components/ToastContainer/ToastContainer";

const bottomNavigationLists = [
  { id: "mainpage", path: "/", icon: <Home />, title: "MainPage" },
  { id: "settings", path: "/settings", icon: <Settings />, title: "Settings" },
];

function App() {
  const tasks = useGlobalStore((state) => state.tasks);
  const addTask = useGlobalStore((state) => state.addTask);
  const { success } = useToast();

  const _addTestTask = () => {
    addTask({ title: "Test task", completed: false, tags: ["test"] });
  };

  const onBottomNavigationItemClickHandler = (path: string) => {
    console.log("navigate to ", path);
  };

  return (
    <div className={styles.App}>
      <Header
        leftSlot={
          <div className={styles.headerTitle}>
            <Typography size="h2">Yui-kit</Typography>

            <Typography size="h2"> | </Typography>
            <Typography size="h2">Version 0.3.0</Typography>
          </div>
        }
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
              {
                id: "3",
                icon: <Settings size={"24px"} />,
                title: "Settings",
                onClick: () => {
                  console.log("Settings!");
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
      <Button onClick={() => success({ id: "toast", title: "toast" })}>
        Test toast
      </Button>
      <ToastContainer />
      {tasks.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
      <BottomNavigation
        listItems={bottomNavigationLists}
        onItemClick={onBottomNavigationItemClickHandler}
      />
    </div>
  );
}

export default App;
