import styles from "./FormTasks.module.css";
import { PlusCircle } from "phosphor-react";

export function FormTasks() {
  return (
    <div>
      <form className={styles.form} action="">
        <textarea
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
        ></textarea>
        <button className={styles.button}>
          Criar <PlusCircle color="white" />
        </button>
      </form>
    </div>
  );
}
