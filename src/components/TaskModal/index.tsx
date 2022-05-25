import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function TaskModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastro de tarefa</h2>
        <input type="text" placeholder="titulo" />
        <input type="text" placeholder="tarefa" />
        <input type="date" placeholder="data" />
        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}
