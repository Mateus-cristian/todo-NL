import React, { useContext } from "react";
import { Container } from "./styles";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

import { TaskContext } from "../../TasksContext";

interface ModalProps {
  isOpen: () => void;
}

export default function TaskTable({ isOpen }: ModalProps) {
  const { tasks } = useContext(TaskContext);
  const { deleteTask } = useContext(TaskContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Tarefa</th>
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
                <BiEdit onClick={isOpen} />
                <BiTrash onClick={() => deleteTask(task)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
