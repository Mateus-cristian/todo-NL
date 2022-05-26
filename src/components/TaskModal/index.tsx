import React, { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { TaskContext } from "../../TasksContext";
import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function TaskModal({ isOpen, onRequestClose }: ModalProps) {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  async function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    await createTask({
      title,
      task,
      date,
    });

    setTitle("");
    setTask("");
    setDate("");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastro de tarefa</h2>
        <input
          type="text"
          placeholder="titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="tarefa"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <input
          type="date"
          placeholder="data"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button type="submit" onClick={handleCreateTask}>
          Enviar
        </button>
      </Container>
    </Modal>
  );
}
