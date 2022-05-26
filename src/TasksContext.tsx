import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
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

    toast.success("🦄 Tarefa Criada com Sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    setTasks([...tasks, task]);
  }

  async function removeTask(id: number) {
    await api.delete(`/tasks/${id}`);

    const response = await api.get("/tasks");

    setTasks(response.data.tasks);
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, removeTask }}>
      <ToastContainer />
      {children}
    </TaskContext.Provider>
  );
}
