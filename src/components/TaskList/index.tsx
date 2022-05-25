import React from "react";
import TaskTable from "../TaskTable";
import { Container } from "./styles";

export default function TaskList() {
  return (
    <Container>
      <div className="content">
        <header>
          <h2>Minhas tarefas:</h2>
          <button>Criar tarefa</button>
        </header>
        <TaskTable />
      </div>
    </Container>
  );
}
