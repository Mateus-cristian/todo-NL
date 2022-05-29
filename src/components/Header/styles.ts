import styled from "styled-components";

export const HeaderApp = styled.header`
  height: 15.62rem;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    gap: 0 20px;
    & span {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.span};
      font-weight: 600;
    }
  }
`;
