import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./service/api";

interface Tasks {
  id: number;
  title: string;
  task: string;
  date: string;
}

type TasksProps = Omit<Tasks, "id">;

interface TasksProvidersProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Tasks[];
  createTask: (Task: TasksProps) => Promise<void>;
  deleteTask: (Task: Tasks) => Promise<void>;
}

export const TaskContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TasksProvider({ children }: TasksProvidersProps) {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    api.get("tasks").then((response) => setTasks(response.data.tasks));
  }, []);

  async function createTask(tasksInputs: TasksProps) {
    const response = await api.post("tasks", tasksInputs);

    const { task } = response.data;

    setTasks([...tasks, task]);
  }

  async function deleteTask(tasksInputs: Tasks) {
    const response = await api.delete("tasks", {
      params: {
        id: tasksInputs.id,
      },
    });
    const { task } = response.data;

    console.log(task);
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
