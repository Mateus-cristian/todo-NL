import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: block;
  margin: 0 auto;
  overflow-x: scroll;

  table {
    width: 100%;
    margin-top: 5rem;

    th {
      text-align: left;
      color: ${(props) => props.theme.colors.th};
    }

    td {
      padding: 1rem 2rem 1rem 0;
      border: 0;

      color: ${(props) => props.theme.colors.td};
      border-radius: 0.25rem;

      &:last-child {
        display: flex;
        padding-left: 15px;
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
