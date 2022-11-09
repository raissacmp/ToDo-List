import { ChangeEvent } from "react";
import styles from "./Tasks.module.css";
import { Trash } from "phosphor-react";
import { useTasks } from "../hooks/useTask";
import { TaskProps } from "../contexts/TasksContext";

export function Tasks() {
  const { tasks, handleChangeTasks, handleDeleteTask } = useTasks();

  const completedTasks = tasks.filter((task) => task.completed === true).length; // deescobrir as tasks ticadas

  return (
    <div className={styles.containerTasks}>
      <header className={styles.headerTasks}>
        <strong className={styles.allTasks}>
          Tarefas criadas <span>{tasks.length}</span>
        </strong>
        <strong className={styles.progressTasks}>
          Concluídas{" "}
          <span>
            {completedTasks} de {tasks.length}
          </span>
        </strong>
      </header>
      {tasks.map((task: TaskProps) => (
        <div key={task.id} className={styles.contentTask}>
          <div className={styles.contentInitialContainerTask}>
            <label className={styles.container}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  handleChangeTasks(task, event.target.checked);
                }}
              />
              <span className={styles.checkmark}></span>
            </label>
            <p
              className={
                task.completed ? styles.textTaskNoCompleted : styles.textTask
              }
            >
              {task.title}
            </p>
          </div>
          <button
            onClick={() => handleDeleteTask(task.id)}
            className={styles.deleteTask}
          >
            <Trash color="gray" size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}
