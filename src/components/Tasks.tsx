import styles from "./Tasks.module.css";
import { Trash } from "phosphor-react";

export function Tasks() {
  return (
    <div className={styles.containerTasks}>
      <header className={styles.headerTasks}>
        <strong className={styles.allTasks}>
          Tarefas criadas <span>5</span>
        </strong>
        <strong className={styles.progressTasks}>
          Concluidas <span>2 de 5</span>
        </strong>
      </header>
      <div className={styles.contentTask}>
        <input type="checkbox" />
        <p className={styles.textTask}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash color="gray" size={20} />
      </div>
      <div className={styles.contentTask}>
        <input type="checkbox" />
        <p className={styles.textTask}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash color="gray" size={20} />
      </div>
      <div className={styles.contentTask}>
        <input type="checkbox" />
        <p className={styles.textTask}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash color="gray" size={20} />
      </div>
    </div>
  );
}
