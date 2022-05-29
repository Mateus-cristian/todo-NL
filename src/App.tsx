import React, { useState } from "react";
import { GlobalStyle } from "./styles/global";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import Modal from "react-modal";
import { TasksProvider } from "./TasksContext";

Modal.setAppElement("#root");
function App() {
  const [modalOpen, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <TasksProvider>
      <Header />
      <TaskList handleOpenModal={handleOpenModal} />
      <TaskModal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        text={"Cadastrar"}
      />
      <GlobalStyle />
    </TasksProvider>
  );
}

export default App;
