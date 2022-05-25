import React, { useState } from "react";
import { GlobalStyle } from "./styles/global";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import Modal from "react-modal";

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
    <>
      <Header />
      <TaskList handleOpenModal={handleOpenModal} />
      <TaskModal isOpen={modalOpen} onRequestClose={handleCloseModal} />
      <GlobalStyle />
    </>
  );
}

export default App;
