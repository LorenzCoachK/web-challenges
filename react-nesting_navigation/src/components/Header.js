import React from "react";
import Logo from "./Logo.js";
import Navigation from "./Logo.js";
import Avatar from "./Avatar.js";

function Header({ children }) {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <Link href="#home">HOME</Link>
      <Link href="#about">About</Link>
      <Link href="#impressum">Impressum</Link>
      {children}
    </header>
  );
}

export default Header;
