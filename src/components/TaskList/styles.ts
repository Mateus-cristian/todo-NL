import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: block;
  margin: 0 auto;
  padding: 0 20px;

  .content {
    border-radius: 1rem;
    /* margin-top: -5rem; */
    transform: translateY(-5rem);
    padding: 70px 60px;
    filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
    background-color: ${(props) => props.theme.colors.backgroundPrimary};

    header {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 20px;
      @media (max-width: 600px) {
        justify-content: center;
        flex-direction: column-reverse;
      }

      h2 {
        color: ${(props) => props.theme.colors.h2};
        flex: 0 0 300px;
        font-size: 2rem;
        @media (max-width: 600px) {
          flex: unset;
          text-align: center;
        }
      }

      button {
        background-color: ${(props) => props.theme.colors.backgroundSecondary};

        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.button};
        border: 2px solid ${(props) => props.theme.colors.border};
        border-radius: 0.5rem;
        padding: 1rem 2rem;
        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.9);
          border: 2px solid ${(props) => props.theme.colors.borderActive};
        }
      }
    }
  }
`;
