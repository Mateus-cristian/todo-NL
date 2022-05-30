import React, { useState } from "react";
import { GlobalStyle } from "./styles/global";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import Modal from "react-modal";
import { TasksProvider } from "./TasksContext";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Footer from "./components/Footer";
import UsePersistedState from "./utils/UsePersistedStateTheme";

Modal.setAppElement("#root");
function App() {
  const [modalOpen, setOpenModal] = useState(false);
  const [theme, setTheme] = UsePersistedState("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <TasksProvider>
        <Header />
        <TaskList handleOpenModal={handleOpenModal} />
        <TaskModal isOpen={modalOpen} onRequestClose={handleCloseModal} />
        <GlobalStyle />
        <Footer toggleTheme={toggleTheme} />
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
