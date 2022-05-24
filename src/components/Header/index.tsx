import React from "react";
import { HeaderApp } from "./styles";
import Logo from "../../assets/images/Logo.svg";

export default function Header() {
  return (
    <HeaderApp>
      <div className="logo">
        <img src={Logo} alt="logo nl" />
        <span>Todo NL</span>
      </div>
    </HeaderApp>
  );
}
