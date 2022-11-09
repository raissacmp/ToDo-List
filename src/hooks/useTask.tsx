import { useContext } from "react";
import { TaskContext, TaskContextDataProps } from "../contexts/TasksContext";

export function useTasks(): TaskContextDataProps {
  const context = useContext(TaskContext);
  return context;
}
