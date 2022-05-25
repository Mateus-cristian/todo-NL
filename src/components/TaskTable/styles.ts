import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: block;
  margin: 0 auto;

  table {
    width: 100%;
    margin-top: 5rem;

    th {
      text-align: left;
    }

    td {
      padding: 1rem 2rem 1rem 0;
      border: 0;
      background-color: var(--shape);
      color: var(--text-title);
      border-radius: 0.25rem;

      &:last-child {
        display: flex;
        padding-left: 15px;
        gap: 0 50px;

        svg {
          cursor: pointer;
        }
      }
    }
  }
`;
