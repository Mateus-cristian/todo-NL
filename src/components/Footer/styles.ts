import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 25px;

  margin-top: 10px;
  bottom: 0;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  align-items: center;
  left: 0;
  width: 100%;

  h3 {
    color: ${(props) => props.theme.colors.h3};
  }
`;