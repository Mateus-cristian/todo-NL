import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer, Model } from "miragejs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

createServer({
  models: {
    task: Model,
  },

  seeds(server) {
    server.db.loadData({
      tasks: [
        {
          id: 1,
          title: "compras",
          task: "Comprar pão",
          date: new Date("2021-02-02 03:00:00"),
        },
        {
          id: 2,
          title: "jantar",
          task: "Jantar especial",
          date: new Date("2021-02-03 03:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("tasks", () => {
      return this.schema.all("task");
    });

    this.post("tasks", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("task", data);
    });

    this.del("/tasks/:id");
  },
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
