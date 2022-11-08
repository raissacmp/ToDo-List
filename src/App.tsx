import { Header } from "./components/Header";
import { FormTasks } from "./components/FormTasks";
import { Tasks } from "./components/Tasks";

// import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <FormTasks />
      <Tasks />
    </>
  );
}

export default App;
