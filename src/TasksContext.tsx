import { createContext, ReactNode, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { api } from "./service/api";
import "react-toastify/dist/ReactToastify.min.css";
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
  removeTask: (id: number) => Promise<void>;
  updatedTask: (task: Tasks) => Promise<void>;
}

export const TaskContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TasksProvider({ children }: TasksProvidersProps) {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    api.get("tasks").then((response) => setTasks(response.data));
  }, []);

  async function getTasks() {
    await api.get("tasks").then((response) => setTasks(response.data));
  }

  async function createTask(tasksInputs: TasksProps) {
    toast.success("Tarefa Criada com Sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    await api.post("tasks/post", tasksInputs).then(() => getTasks());
  }

  async function removeTask(id: number) {
    await api.delete(`tasks/delete/${id}`).then(() => getTasks());
  }

  async function updatedTask(task: Tasks) {
    toast.success("Tarefa Atualizada com Sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    await api.put(`tasks/update/`, task).then(() => getTasks());
  }

  return (
    <TaskContext.Provider
      value={{ tasks, removeTask, updatedTask, createTask }}
    >
      <ToastContainer />
      {children}
    </TaskContext.Provider>
  );
}
