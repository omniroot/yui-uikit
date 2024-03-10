import { Button } from "lib";
import styles from "./App.module.css";
import { Loader } from "lib/components/Loader/Loader";

function App() {
  return (
    <div className={styles.App}>
      <span>Preview:</span>
      <Button variant="primary">primary</Button>
      <Button variant="primary" isLoading>primary</Button>
      <Button variant="primary" disabled>primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondary" isLoading>secondary</Button>
      <Button variant="secondary" disabled>secondary</Button>
      <Button variant="outline">outline</Button>
      <Button variant="outline" isLoading>outline</Button>
      <Button variant="outline" disabled>outline</Button>

      <Loader variant="small" />
      <Loader variant="standart" />
      <Loader variant="fullscreen" />
    </div>
  );
}

export default App;
