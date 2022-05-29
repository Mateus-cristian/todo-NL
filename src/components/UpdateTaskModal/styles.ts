import styled from "styled-components";

export const Container = styled.form`
  h2 {
    font-size: 2rem;
    color: var(--text-title);
    margin-bottom: 1.5rem;
  }
  input {
    width: 100%;
    padding: 1rem;
    border: 0;
    border-radius: 0.25rem;
    & + input {
      margin-top: 0.5rem;
    }
  }

  button {
    background-color: var(--orange);
    width: 100%;
    font-size: 1.25rem;
    color: #fff;
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    transition: filter 0.3s;
    margin-top: 1rem;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
