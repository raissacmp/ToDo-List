import { ClipboardText } from "phosphor-react";

import styles from "./EmptyTasks.module.css";

export function EmptyTasks() {
  return (
    <div className={styles.containerEmptyTasks}>
      <ClipboardText color="gray" size={76} />
      <strong className={styles.titleEmptyTasks}>
        Você ainda não tem tarefas cadastradas
      </strong>
      <span className={styles.titleEmptyTasks}>
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  );
}
