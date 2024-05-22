import { Button } from "lib";
import styles from "./App.module.css";
import { Spinner } from "lib/components/Spinner/Spinner";
import { Input } from "lib/components/Input/Input";
import { Typography } from "lib/components/Typography/Typography";
import { IconButton } from "lib/components/IconButton/IconButton";
import { Checkbox } from "lib/components/Checkbox/Checkbox";
import { FAB } from "lib/components/FAB/FAB";
import { Medal, Linkedin, MenuIcon } from "lucide-react";
import { TextArea } from "lib/components/TextArea/TextArea";
import { Header } from "lib/components/Header/Header";
import { ColorPicker } from "lib/components/ColorPicker/ColorPicker";
import { Popup } from "lib/components/Popup/Popup";

function App() {
  const onClickHandler = () => {
    alert(1);
  };
  return (
    <div className={styles.App}>
      <Header
        leftSlot={<Typography size="h2">Yui-kit</Typography>}
        rightSlot={
          <Popup
            listItems={[
              <span onClick={() => alert(123)}>123</span>,
              <span onClick={() => alert(345)}>345</span>,
            ]}
            position="left"
          >
            <MenuIcon />
          </Popup>
        }
      />
      <FAB onClick={() => console.log("fab clicked")}>{<Medal />}</FAB>
      <span>Text:</span>
      <Typography size="h1">typography 1</Typography>
      <Typography size="h2">typography 2</Typography>
      <Typography size="h3">typography 3</Typography>
      <Typography size="h4">typography 4</Typography>
      <Typography size="h5">typography 5</Typography>
      <Typography size="h6">typography 6</Typography>
      <Typography.Heading rightSlot={<Button>More</Button>}>
        Heading
      </Typography.Heading>
      <span style={{ color: "var(--yui-color-lightgray)" }}>text</span>
      <span style={{ color: "var(--yui-color-gray)" }}>text 2</span>
      <span style={{ color: "var(--yui-color-darkgray)" }}>text 3</span>
      <span style={{ color: "var(--yui-color-lightgreen)" }}>text 3</span>
      <span style={{ color: "var(--yui-color-green)" }}>text 3</span>
      <span style={{ color: "var(--yui-color-darkgreen)" }}>text 3</span>
      <span>Preview:</span>
      <Button onClick={onClickHandler} variant="primary">
        primary
      </Button>
      <Button onClick={onClickHandler} variant="primary" loading>
        primary
      </Button>
      <Button onClick={onClickHandler} variant="primary" disabled>
        primary
      </Button>
      <Button onClick={onClickHandler} variant="secondary">
        secondary
      </Button>
      <Button onClick={onClickHandler} variant="secondary" loading>
        secondary
      </Button>
      <Button onClick={onClickHandler} variant="secondary" disabled>
        secondary
      </Button>
      <Button onClick={onClickHandler} variant="outline">
        outline
      </Button>
      <Button onClick={onClickHandler} variant="transparent">
        transparent
      </Button>
      <Button onClick={onClickHandler} variant="outline" loading>
        outline
      </Button>
      <Button onClick={onClickHandler} variant="outline" disabled>
        outline
      </Button>
      {/* from test branch */}
      <Spinner variant="small" />
      <Spinner variant="standart" />
      {/* <Loader variant="fullscreen" /> */}

      <span>Input:</span>
      <Input
        onChangeCallback={(text) => console.log("chnage:", text)}
        onSubmit={(text) => console.log("submit:", text)}
				autoFocus
				
      />
      <Input symbolCount={false} />
      <span>textarea:</span>
      <TextArea>123</TextArea>
      <span>IconButton</span>
      <IconButton onClick={() => alert("Icon Button Clicked!")}>
        <Linkedin />
      </IconButton>
      <span>Checkbox:</span>
      <Checkbox onChangeCallback={() => console.log("checkbox changed")}>
        I accept privacy police
      </Checkbox>
      <span style={{ display: "flex" }}>
        colorpicker :<ColorPicker />
      </span>
      <span>Popup</span>
      <Popup
        listItems={[
          <span onClick={() => alert(123)}>123</span>,
          <span onClick={() => alert(345)}>345</span>,
        ]}
        position="right"
      >
        <MenuIcon />
      </Popup>
    </div>
  );
}

export default App;
