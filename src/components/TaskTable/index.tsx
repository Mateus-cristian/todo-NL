import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { api } from "../../service/api";

interface Tasks {
  id: number;
  title: string;
  task: string;
  date: string;
}

export default function TaskTable() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    api.get("tasks").then((response) => setTasks(response.data.tasks));
  }, []);

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
                <BiEdit />
                <BiTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
