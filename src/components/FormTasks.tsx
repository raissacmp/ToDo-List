import { ChangeEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./FormTasks.module.css";
import { useTasks } from "../hooks/useTask";

export function FormTasks() {
  const { createTasks } = useTasks();

  const [taskNewValue, setTaskNewValue] = useState("");

  function handleTaskChange(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    createTasks(taskNewValue); //atualizando o estado pela função
    setTaskNewValue("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskNewValue(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleTaskChange} className={styles.form}>
        <textarea
          name="task"
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={taskNewValue}
        ></textarea>
        <button className={styles.button}>
          Criar <PlusCircle color="white" />
        </button>
      </form>
    </div>
  );
}
