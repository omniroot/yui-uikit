import { Button } from "lib";
import styles from "./App.module.css";
import { Loader } from "lib/components/Loader/Loader";

function App() {
  const onClickHandler = () => {
    alert(1)
  }
  return (
    <div className={styles.App}>
      <span>Preview:</span>
      <Button onClick={onClickHandler} variant="primary">primary</Button>
      <Button onClick={onClickHandler} variant="primary" loading>primary</Button>
      <Button onClick={onClickHandler} variant="primary" disabled>primary</Button>
      <Button onClick={onClickHandler} variant="secondary">secondary</Button>
      <Button onClick={onClickHandler} variant="secondary" loading>secondary</Button>
      <Button onClick={onClickHandler} variant="secondary" disabled>secondary</Button>
      <Button onClick={onClickHandler} variant="outline">outline</Button>
      <Button onClick={onClickHandler} variant="outline" loading>outline</Button>
      <Button onClick={onClickHandler} variant="outline" disabled>outline</Button>

      <Loader variant="small" />
      <Loader variant="standart" />
      {/* <Loader variant="fullscreen" /> */}
    </div>
  );
}

export default App;
