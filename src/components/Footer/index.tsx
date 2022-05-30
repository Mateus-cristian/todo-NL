import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface toggleTheme {
  toggleTheme: () => void;
}

export default function Footer({ toggleTheme }: toggleTheme) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <h3>
        Feito por &nbsp;
        <a href="https://www.linkedin.com/in/mateus-cristian-ferreira-de-paula-2520271a4/">
          Mateus Cristian
        </a>
        &nbsp;com todo amor e carinho ❤️
      </h3>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        offHandleColor="#444"
        onHandleColor="#fff"
        checkedIcon={
          <p
            style={{
              position: "absolute",
              top: "2px",
              right: "-23px",
              zIndex: "100",
            }}
          >
            🌑
          </p>
        }
        uncheckedIcon={
          <p
            style={{
              position: "absolute",
              top: "2px",
              right: "31px",
              zIndex: "100",
            }}
          >
            🌞
          </p>
        }
        offColor="#fff"
        onColor="#444"
      />
    </Container>
  );
}
