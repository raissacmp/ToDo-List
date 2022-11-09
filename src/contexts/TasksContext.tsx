import { createContext, ReactNode, useState } from "react";

export interface TaskContextDataProps {
  tasks: TaskProps[];
  createTasks: (task: string) => void; //tipar a função e os parametros
  handleChangeTasks: (task: TaskProps, completed: boolean) => void; //tipar a função e os parametros
}

interface TaskProviderProps {
  children: ReactNode;
}

export interface TaskProps {
  title?: string;
  completed?: boolean;
  id?: string;
}

export const TaskContext = createContext({} as TaskContextDataProps);

export function TaskContextProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const createTasks = (task: string) => {
    setTasks((oldState) => [
      ...oldState,
      { title: task, completed: false, id: Math.random().toString(36) },
    ]);
  };

  const handleChangeTasks = (task: TaskProps, completed: boolean) => {
    setTasks((oldState: TaskProps[]) => {
      const currentTask = oldState.filter(
        (oldTask: TaskProps) => task.id !== oldTask.id
      );

      const updatedTask = { ...task, completed: completed };

      return [...currentTask, updatedTask];
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTasks,
        handleChangeTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
