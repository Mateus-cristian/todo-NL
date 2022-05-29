import React, { FormEvent, useContext } from "react";
import Modal from "react-modal";
import { TaskContext } from "../../TasksContext";
import { Container } from "./styles";

interface ModalProps {
  text: string;
  isOpen: boolean;
  onRequestClose: () => void;
  task: Tasks;
  setTask: (task: Tasks) => void;
}

interface Tasks {
  id: number;
  title: string;
  task: string;
  date: string;
}

export default function UpdateTaskModal({
  isOpen,
  onRequestClose,
  text,
  task: selected,
  setTask,
}: ModalProps) {
  const { updatedTask } = useContext(TaskContext);

  async function handleUpdateTask(event: FormEvent) {
    event.preventDefault();

    await updatedTask(selected);

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleUpdateTask}>
        <h2>{text} tarefa</h2>
        <input
          required
          type="text"
          placeholder="titulo"
          value={selected.title}
          onChange={(event) =>
            setTask({ ...selected, title: event.target.value })
          }
        />
        <input
          required
          type="text"
          placeholder="tarefa"
          value={selected.task}
          onChange={(event) =>
            setTask({ ...selected, task: event.target.value })
          }
        />
        <input
          required
          type="date"
          placeholder="data"
          value={selected.date || ""}
          onChange={(event) =>
            setTask({ ...selected, date: event.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}
