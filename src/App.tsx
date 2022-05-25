import React from "react";
import { GlobalStyle } from "./styles/global";

import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <TaskList />
      <GlobalStyle />
    </>
  );
}

export default App;
