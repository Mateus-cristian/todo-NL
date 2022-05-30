import React, { useContext, useState } from "react";
import { Container } from "./styles";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { TaskContext } from "../../TasksContext";
import UpdateTaskModal from "../UpdateTaskModal";

interface Tasks {
  id: number;
  title: string;
  task: string;
  date: string;
}

export default function TaskTable() {
  const { tasks, removeTask } = useContext(TaskContext);
  const [modalOpen, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Tasks>({} as Tasks);

  function updateTasks(tasks: Tasks) {
    setSelectedTask(tasks);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  async function handleDeleteTask(taskId: number) {
    removeTask(taskId);
  }

  return (
    <Container>
      <UpdateTaskModal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        task={selectedTask}
        setTask={setSelectedTask}
      />
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Editar/Deletar</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.task}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(new Date(task.date))}
              </td>
              <td>
                <BiEdit onClick={() => updateTasks(task)} />
                <BiTrash onClick={() => handleDeleteTask(task.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
