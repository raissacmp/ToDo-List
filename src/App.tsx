import { Header } from "./components/Header";
import { FormTasks } from "./components/FormTasks";
import { Tasks } from "./components/Tasks";
import { TaskContextProvider } from "./contexts/TasksContext";

// import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <TaskContextProvider>
        <FormTasks />
        <Tasks />
      </TaskContextProvider>
    </>
  );
}

export default App;
