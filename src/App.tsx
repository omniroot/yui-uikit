import { Button } from "lib";
import styles from "./App.module.css";
import { Spinner } from "lib/components/Spinner/Spinner";
import { Input } from "lib/components/Input/Input";

function App() {
  const onClickHandler = () => {
    alert(1);
  };
  return (
    <div className={styles.App}>
      <span>Text:</span>
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
      <Input onChangeCallback={(text) => console.log("chnage:", text)} />
      <Input symbolCount={false} />
    </div>
  );
}

export default App;
