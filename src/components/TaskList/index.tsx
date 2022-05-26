import React from "react";
import TaskTable from "../TaskTable";
import { Container } from "./styles";

interface ModalProps {
  handleOpenModal: () => void;
}

export default function TaskList({ handleOpenModal }: ModalProps) {
  return (
    <Container>
      <div className="content">
        <header>
          <h2>Minhas tarefas:</h2>
          <button onClick={handleOpenModal}>Criar tarefa</button>
        </header>
        <TaskTable isOpen={handleOpenModal} />
      </div>
    </Container>
  );
}
