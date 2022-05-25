import React from "react";
import { Container } from "./styles";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

export default function TaskTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Tarefa</th>
            <th>Data</th>
            <th>Editar/Deletar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Compras</td>
            <td>Comprar pão</td>
            <td>21/12/2021</td>
            <td>
              <BiEdit />
              <BiTrash />
            </td>
          </tr>
          <tr>
            <td>janta</td>
            <td>Preparar uma janta especial</td>
            <td>21/12/2021</td>
            <td>
              <BiEdit />
              <BiTrash />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
