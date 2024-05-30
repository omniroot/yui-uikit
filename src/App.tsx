import styles from "./App.module.css";
import { Button, Header, Popup, Typography } from "lib";
import { DoorClosed, Home, MenuIcon } from "lucide-react";

function App() {
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
      <Button>press</Button>
    </div>
  );
}

export default App;
