import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 25px;
  position: absolute;
  margin-top: 10px;
  bottom: 0;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  align-items: center;
  left: 0;
  width: 100%;

  h3 {
    color: ${(props) => props.theme.colors.h3};

    a {
      color: #fff;
      transition: all 0.3s;

      &:hover {
        color: ${(props) => props.theme.colors.h2};
        text-decoration: underline;
      }
    }
  }
`;
