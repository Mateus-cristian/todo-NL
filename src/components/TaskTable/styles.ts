import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: block;
  margin: 0 auto;
  @media (max-width: 600px) {
    overflow-x: scroll;
  }

  table {
    width: 100%;
    margin-top: 5rem;

    th {
      text-align: center;
      color: ${(props) => props.theme.colors.th};
      @media (max-width: 600px) {
        padding-right: 2rem;
      }
    }

    td {
      padding: 1rem 0rem 1rem 0;
      border: 0;
      text-align: center;
      color: ${(props) => props.theme.colors.td};
      border-radius: 0.25rem;
      @media (max-width: 600px) {
        padding: 1rem 2rem 0rem 0rem;
      }
      &:last-child {
        display: flex;
        text-align: center;
        justify-content: center;
        gap: 0 50px;

        svg {
          cursor: pointer;
          &:hover {
            filter: brightness(0) saturate(100%) invert(39%) sepia(61%)
              saturate(7482%) hue-rotate(5deg) brightness(106%) contrast(102%);
          }
        }
      }
    }
  }
`;
