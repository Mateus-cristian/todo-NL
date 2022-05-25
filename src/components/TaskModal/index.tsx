import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import { api } from "../../service/api";
import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function TaskModal({ isOpen, onRequestClose }: ModalProps) {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date(""));

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      task,
      date,
    };

    api.post("tasks", data);

    setTitle("");
    setTask("");
    setDate(new Date(""));
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
          onChange={(event) => setDate(new Date(event.target.value))}
        />
        <button type="submit" onClick={handleCreateTask}>
          Enviar
        </button>
      </Container>
    </Modal>
  );
}
