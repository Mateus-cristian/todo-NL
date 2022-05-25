import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: block;
  margin: 0 auto;

  .content {
    border-radius: 1rem;
    margin-top: -5rem;
    padding: 70px 60px;
    filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
    background-color: #fff;

    header {
      display: flex;
      justify-content: space-between;

      h2 {
        color: var(--text-title);
        font-size: 2rem;
      }

      button {
        background-color: var(--orange);
        font-size: 1.25rem;
        color: #fff;
        border: 0;
        border-radius: 0.5rem;
        padding: 1rem 2rem;
        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
