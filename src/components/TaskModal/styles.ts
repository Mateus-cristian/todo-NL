import styled from "styled-components";

export const Container = styled.form`
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.h2Alt};
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
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    width: 100%;
    font-size: 1.25rem;
    color: #fff;
    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    transition: filter 0.3s;
    margin-top: 1rem;
    &:hover {
      border: 2px solid ${(props) => props.theme.colors.borderActive};
      filter: brightness(0.8);
    }
  }
`;
